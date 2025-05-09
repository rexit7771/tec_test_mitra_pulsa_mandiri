import requests
import os
from telegram import Update
from telegram.ext import ContextTypes

async def product_detail(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Format: /product <id>")
        return
    
    product_id = context.args[0]
    url = os.getenv("API_BASE_URL") + f"/products/{product_id}"

    response = requests.get(url)
    if response.status_code == 200:
        responseJson = response.json()
        product = responseJson['data']
        product_info = f"id: {product['id']} \nproduct: {product['name']} \nprice: {product['price']} \nstock: {product['stock']} \ncategory: {product['category']}"
        await update.message.reply_text(product_info)
    else:
        await update.message.reply_text("Gagal menampilkan produk")