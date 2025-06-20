from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from .models import Skill, Project, Education, Certificate, ContactMessage
from .serializers import (
    SkillSerializer, ProjectSerializer, EducationSerializer, 
    CertificateSerializer, ContactMessageSerializer
)

class SkillListView(generics.ListAPIView):
    serializer_class = SkillSerializer
    
    def get_queryset(self):
        return Skill.objects.all()
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        
        # Group skills by type
        skills_by_type = {}
        for skill in queryset:
            skill_type = skill.skill_type
            if skill_type not in skills_by_type:
                skills_by_type[skill_type] = []
            skills_by_type[skill_type].append(SkillSerializer(skill).data)
        
        return Response(skills_by_type)

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class CertificateListView(generics.ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer

@api_view(['POST'])
def contact_view(request):
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save the message
        message = serializer.save()
        
        # Send email notification
        try:
            subject = f"New Contact Message: {message.subject}"
            email_message = f"""
            New message from your portfolio website:
            
            Name: {message.name}
            Email: {message.email}
            Subject: {message.subject}
            
            Message:
            {message.message}
            
            Sent at: {message.created_at}
            """
            
            send_mail(
                subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send email: {e}")
        
        return Response(
            {'message': 'Message sent successfully!'}, 
            status=status.HTTP_201_CREATED
        )
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
