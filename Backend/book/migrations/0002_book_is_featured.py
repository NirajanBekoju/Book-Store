# Generated by Django 3.1.3 on 2020-11-18 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='is_featured',
            field=models.BooleanField(default=False),
        ),
    ]
