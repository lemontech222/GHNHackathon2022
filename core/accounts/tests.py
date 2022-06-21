from django.test import TestCase
from .models import User

class Test_Create_User(TestCase):
    # Test User model
    @classmethod
    def setUpTestData(cls):
        test_user1 = User.objects.create_user(email='user1@site.com',username='user1',password='testing321')
        test_user2 = User.objects.create_user(email='user2@site.com',username='user2',password='testing321')
        admin_user = User.objects.create_superuser(email='admin1@site.com',username='admin1',password='testing321')

    def test_user_creation(self):
        users = User.objects.all()

        self.assertEqual(users[0].username, 'user1')
        self.assertEqual(users[1].username, 'user2')
        self.assertEqual(str(users[1]), 'user2')
        self.assertNotEqual(users[1].password, 'testing321')
        with self.assertRaises(ValueError):
            User.objects.create_superuser(email='admin@site.com',username='admin',password='testing321',is_staff=False)
        with self.assertRaises(ValueError):
            User.objects.create_superuser(email='admin2@site.com',username='admin2',password='testing321',is_superuser=False)

