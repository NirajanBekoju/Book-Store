from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class MyAccountManager(BaseUserManager):
    def create_user(self, name, email, password=None):
        if not name:
            raise ValueError("User must have an first name")
        if not email:
            raise ValueError("User must have an email address")
        
        user = self.model(
            name = name,
            email = self.normalize_email(email),
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, name, email, password):
        user = self.create_user(
            name = name,
            email = self.normalize_email(email),
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    name = models.CharField(max_length=30)
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="date joined", auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = MyAccountManager()

    def __str__(self):
        return f'{self.name}'
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True