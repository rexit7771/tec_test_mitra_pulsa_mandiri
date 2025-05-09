import requests
import os
from telegram import Update
from telegram.ext import ContextTypes

async def products(update: Update, context: ContextTypes.DEFAULT_TYPE):
    url = os.getenv("API_BASE_URL") + "/products"
    response = requests.get(url)
    if response.status_code == 200:
        responseJson = response.json()
        products = responseJson['data'];
        msg = ""
        for index, product in enumerate(products):
            product_info = f"{index+1}. id: {product['id']} \nproduct: {product['name']} \nprice: {product['price']} \nstock: {product['stock']} \ncategory: {product['category']} \n"
            if msg:
                msg += "\n" + product_info
            else:
                msg = product_info

        await update.message.reply_text(msg)
    else:
        await update.message.repyly_text("Gagal ambil produk")