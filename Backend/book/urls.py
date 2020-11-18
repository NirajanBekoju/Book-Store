from django.urls import path
from .views import ListingsBookView, ListingBookDetailView, SearchView, FeaturedBookView

urlpatterns = [
    path('', ListingsBookView.as_view()),
    path('search', SearchView.as_view()),
    path('featured', FeaturedBookView.as_view()),
    path('<id>', ListingBookDetailView.as_view()),
]