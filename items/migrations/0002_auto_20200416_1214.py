# Generated by Django 3.0.3 on 2020-04-16 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
    ]