# Generated by Django 3.0.3 on 2020-04-15 12:59

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.ImageField(upload_to='items')),
                ('score', models.IntegerField(default=0)),
                ('verified', models.BooleanField(default=False)),
                ('date_posted', models.DateField(default=datetime.datetime.now)),
                ('accepted', models.BooleanField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
