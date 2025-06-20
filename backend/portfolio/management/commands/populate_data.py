import os
from django.core.management.base import BaseCommand
from portfolio.models import Skill, Project, Education, Certificate

class Command(BaseCommand):
    help = 'Populate initial data for the portfolio'

    def handle(self, *args, **options):
        self.stdout.write('Populating initial data...')
        
        # Create Skills
        skills_data = [
            # Technical Skills
            {'name': 'JavaScript', 'skill_type': 'technical', 'level': 90, 'icon': 'fab fa-js-square'},
            {'name': 'React.js', 'skill_type': 'technical', 'level': 85, 'icon': 'fab fa-react'},
            {'name': 'Django', 'skill_type': 'technical', 'level': 80, 'icon': 'fas fa-server'},
            {'name': 'Python', 'skill_type': 'technical', 'level': 80, 'icon': 'fab fa-python'},
            {'name': 'Node.js', 'skill_type': 'technical', 'level': 75, 'icon': 'fab fa-node-js'},
            {'name': 'Java', 'skill_type': 'technical', 'level': 75, 'icon': 'fab fa-java'},
            {'name': 'MySQL', 'skill_type': 'technical', 'level': 80, 'icon': 'fas fa-database'},
            {'name': 'MongoDB', 'skill_type': 'technical', 'level': 70, 'icon': 'fas fa-leaf'},
            
            # Soft Skills
            {'name': 'Problem Solving', 'skill_type': 'soft', 'level': 90, 'icon': 'fas fa-puzzle-piece'},
            {'name': 'Team Collaboration', 'skill_type': 'soft', 'level': 85, 'icon': 'fas fa-users'},
            {'name': 'Communication', 'skill_type': 'soft', 'level': 80, 'icon': 'fas fa-comments'},
            {'name': 'Adaptability', 'skill_type': 'soft', 'level': 85, 'icon': 'fas fa-sync-alt'},
            {'name': 'Time Management', 'skill_type': 'soft', 'level': 80, 'icon': 'fas fa-clock'},
            {'name': 'Creativity', 'skill_type': 'soft', 'level': 85, 'icon': 'fas fa-lightbulb'},
            
            # Tools
            {'name': 'Git', 'skill_type': 'tools', 'level': 85, 'icon': 'fab fa-git-alt'},
            {'name': 'VS Code', 'skill_type': 'tools', 'level': 90, 'icon': 'fas fa-code'},
            {'name': 'Postman', 'skill_type': 'tools', 'level': 80, 'icon': 'fas fa-paper-plane'},
            {'name': 'XAMPP', 'skill_type': 'tools', 'level': 75, 'icon': 'fas fa-server'},
        ]
        
        for skill_data in skills_data:
            skill, created = Skill.objects.get_or_create(
                name=skill_data['name'],
                defaults=skill_data
            )
            if created:
                self.stdout.write(f'Created skill: {skill.name}')
        
        # Create Projects
        projects_data = [
            {
                'title': 'NetruDoc - Healthcare Platform',
                'description': 'A comprehensive online doctor appointment system built with modern web technologies. Features include patient registration, doctor profiles, appointment booking, and admin dashboard with MVC architecture.',
                'technologies': ['React.js', 'Node.js', 'MongoDB', 'JSP/Servlet', 'MySQL', 'Apache Tomcat'],
                'github_url': 'https://github.com/Ashishkdk18',
                'live_url': '',
                'category': 'fullstack',
                'featured': True,
                'order': 1
            },
            {
                'title': 'FutsalPro - Elite Booking System',
                'description': 'Elite booking system for futsal grounds with user authentication, slot management, and payment integration. Includes comprehensive admin panel for ground management and booking analytics.',
                'technologies': ['React.js', 'Node.js', 'MySQL', 'Express.js'],
                'github_url': 'https://github.com/Ashishkdk18',
                'live_url': '',
                'category': 'fullstack',
                'featured': True,
                'order': 2
            },
            {
                'title': 'E-commerce Printer Store',
                'description': 'Full-featured e-commerce website for printer technology with product catalog, shopping cart, user authentication, and comprehensive order management system.',
                'technologies': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
                'github_url': 'https://github.com/Ashishkdk18',
                'live_url': '',
                'category': 'frontend',
                'featured': False,
                'order': 3
            }
        ]
        
        for project_data in projects_data:
            project, created = Project.objects.get_or_create(
                title=project_data['title'],
                defaults=project_data
            )
            if created:
                self.stdout.write(f'Created project: {project.title}')
        
        # Create Education
        education_data = [
            {
                'degree': 'BSc (Hons) Computing',
                'institution': 'Itahari International College | London Metropolitan University',
                'location': 'Sundarharaicha-4, Morang',
                'start_date': '2023-01-01',
                'end_date': None,
                'description': 'Currently pursuing Bachelor of Science in Computing with focus on software development and web technologies.'
            },
            {
                'degree': 'SLC NEB Board',
                'institution': 'Vishwa Adarsha College',
                'location': 'Itahari-4, Sunsari',
                'start_date': '2021-01-01',
                'end_date': '2022-12-31',
                'description': 'Completed higher secondary education with focus on science and mathematics.'
            },
            {
                'degree': 'SEE NEB Board',
                'institution': 'Vishwa Adarsha School',
                'location': 'Itahari, Aaitabaray',
                'start_date': '2019-01-01',
                'end_date': '2020-12-31',
                'description': 'Completed secondary education with excellent academic performance.'
            }
        ]
        
        for edu_data in education_data:
            education, created = Education.objects.get_or_create(
                degree=edu_data['degree'],
                institution=edu_data['institution'],
                defaults=edu_data
            )
            if created:
                self.stdout.write(f'Created education: {education.degree}')
        
        # Create Certificates
        certificates_data = [
            {
                'name': 'AWS Academy Cloud Foundations',
                'issuer': 'Amazon Web Services',
                'issue_date': '2023-06-01'
            },
            {
                'name': 'AWS Academy Machine Learning Foundations',
                'issuer': 'Amazon Web Services',
                'issue_date': '2023-07-01'
            },
            {
                'name': 'AWS Academy Machine Learning for Natural Language Processing',
                'issuer': 'Amazon Web Services',
                'issue_date': '2023-08-01'
            }
        ]
        
        for cert_data in certificates_data:
            certificate, created = Certificate.objects.get_or_create(
                name=cert_data['name'],
                defaults=cert_data
            )
            if created:
                self.stdout.write(f'Created certificate: {certificate.name}')
        
        self.stdout.write(self.style.SUCCESS('Successfully populated initial data!'))
