# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .service.stock_prediction import predict_stock_price, get_stock_data


@csrf_exempt
def stock_data(request):
    if request.method == 'GET':
        # Get stock data
        stock_data = get_stock_data()
        return JsonResponse(stock_data, safe=False)
    return JsonResponse({'error': 'Invalid request'})


@csrf_exempt
def stock_prediction(request):
    if request.method == 'GET':
        # Predict stock prices
        prediction = predict_stock_price(1)
        return JsonResponse(prediction, safe=False)
    return JsonResponse({'error': 'Invalid request'})
