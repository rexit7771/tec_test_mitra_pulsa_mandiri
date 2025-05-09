import requests, os
import pandas as pd
from fpdf import FPDF
from telegram import Update
from telegram.ext import ContextTypes

async def export_all(update: Update, context: ContextTypes.DEFAULT_TYPE):
    response = requests.get(os.getenv("API_BASE_URL") + "/products")
    if response.status_code == 200:
        responseJson = response.json()
        products = responseJson['data']

        df = pd.DataFrame(products)
        excel_path = "exports/products.xlsx"
        df.to_excel(excel_path, index=False)

        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        for product in products :
            pdf.cell(200, 10, txt=f"{product['id']} - {product['name']}", ln=True)
        pdf_path = "exports/products.pdf"
        pdf.output(pdf_path)

        await update.message.reply_document(open(excel_path, "rb"))
        await update.message.reply_document(open(pdf_path, "rb"))
    else:
        await update.message.reply_text("Gagal ekspor data")