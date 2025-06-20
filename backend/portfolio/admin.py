from django.contrib import admin
from .models import Skill, Project, Education, Certificate, ContactMessage

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'skill_type', 'level', 'created_at']
    list_filter = ['skill_type', 'level']
    search_fields = ['name']
    ordering = ['-level', 'name']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'featured', 'order', 'created_at']
    list_filter = ['category', 'featured', 'created_at']
    search_fields = ['title', 'description']
    list_editable = ['featured', 'order']
    ordering = ['-featured', 'order', '-created_at']

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'start_date', 'end_date']
    list_filter = ['start_date', 'end_date']
    search_fields = ['degree', 'institution']
    ordering = ['-start_date']

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ['name', 'issuer', 'issue_date']
    list_filter = ['issue_date', 'issuer']
    search_fields = ['name', 'issuer']
    ordering = ['-issue_date']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    list_editable = ['is_read']
    ordering = ['-created_at']
    
    def has_add_permission(self, request):
        return False
