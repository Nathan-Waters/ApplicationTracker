from django.urls import path
from . import views


urlpatterns = [
  path("blogPosts/", views.BlogPostListCreate.as_view(), name="blogPost-list-create"),
  path("blogPosts/<int:pk>/", views.BlogPostRetrieveUpdateDestroy.as_view(), name="update")
]