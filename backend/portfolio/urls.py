from django.urls import path
from .views import (
    SkillListView, ProjectListView, EducationListView, 
    CertificateListView, contact_view
)

urlpatterns = [
    path('skills/', SkillListView.as_view(), name='skills-list'),
    path('projects/', ProjectListView.as_view(), name='projects-list'),
    path('education/', EducationListView.as_view(), name='education-list'),
    path('certificates/', CertificateListView.as_view(), name='certificates-list'),
    path('contact/', contact_view, name='contact'),
]
