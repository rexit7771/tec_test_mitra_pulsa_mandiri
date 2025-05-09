import requests, os
import pandas as pd
from fpdf import FPDF
from telegram import Update
from telegram.ext import ContextTypes

async def export_detail(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Format: /export <id>")
        return
    
    product_id = context.args[0]
    response = requests.get(os.getenv("API_BASE_URL") + f"/products/{product_id}")
    if response.status_code == 200:
        responseJson = response.json()
        product = responseJson['data']

        df = pd.DataFrame([product])
        excel_path = f"exports/product_{product_id}.xlsx"
        df.to_excel(excel_path, index=False)

        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        pdf.cell(200, 10, txt=f"Id Produk: {product['id']}\nNama Produk: {product['name']}\nHarga Produk: {product['price']}\nStock Produk: {product['stock']}\nCategory: {product['category']}", ln=True)
        pdf_path = f"exports/product_{product_id}.pdf"
        pdf.output(pdf_path)

        await update.message.reply_document(open(excel_path, "rb"))
        await update.message.reply_document(open(pdf_path, "rb"))
    else:
        await update.message.reply_text("Produk tidak ditemukan.")