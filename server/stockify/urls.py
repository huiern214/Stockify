# urls.py

from django.urls import path
from .views import stock_prediction, stock_data

urlpatterns = [
    path('stock-prediction', stock_prediction, name='stock_prediction'),
    path('stock-data', stock_data, name='stock_data'),
]
