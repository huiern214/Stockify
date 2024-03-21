from datetime import datetime, timedelta
import random
from prophet import Prophet
import pandas as pd
import os


def generate_fake_stock_data():
    fake_data = []
    date = datetime.now() - timedelta(days=365)  # Start date for the fake data
    for _ in range(365):
        # Random date within the last year
        # every day from the start date
        date = date + timedelta(days=1)
        open_price = random.uniform(100, 200)
        high_price = open_price + random.uniform(0, 10)
        low_price = open_price - random.uniform(0, 10)
        close_price = random.uniform(low_price, high_price)
        volume = random.randint(1000, 10000)
        fake_data.append({
            'Date': date.strftime('%Y-%m-%d'),
            'Open': round(open_price, 2),
            'High': round(high_price, 2),
            'Low': round(low_price, 2),
            'Close': round(close_price, 2),
            'Volume': volume
        })
        fake_data_df = pd.DataFrame(fake_data)
    return fake_data_df


def get_stock_data():
    try:
        # print current working directory
        print(os.getcwd())
        data = pd.read_csv(
            './stockify/service/tesla_stock_data.csv')
        print(data.count())
    except FileNotFoundError:
        print('File not found, generating fake data')
        data = generate_fake_stock_data()
        data.to_csv(
            'fake_stock_data', index=False)
    return data.to_dict(orient='records')


def predict_stock_price(n_years):
    data = pd.DataFrame(get_stock_data())
    period = n_years * 365  # calculate number of days

    # Predict forecast with Prophet
    # create dataframe for training data
    df_train = data[["Date", "Close"]]
    df_train = df_train.rename(
        columns={"Date": "ds", "Close": "y"})  # rename columns
    print(df_train.head())
    # Train Prophet model
    m = Prophet()
    m.fit(df_train)

    # Make future predictions
    future = m.make_future_dataframe(periods=period)
    forecast = m.predict(future)

    # Return prediction result
    return forecast.to_dict(orient='records')
