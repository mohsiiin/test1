# Generated by Django 3.0.2 on 2020-02-07 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0005_auto_20200207_0035'),
    ]

    operations = [
        migrations.CreateModel(
            name='MilkbarRev',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rev', models.TextField()),
                ('revowner', models.CharField(max_length=100)),
            ],
        ),
    ]
