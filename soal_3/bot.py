import os
from telegram.ext import ApplicationBuilder, CommandHandler
from dotenv import load_dotenv

from commands.start import start
from commands.products import products
from commands.product_detail import product_detail


load_dotenv()
BOT_TOKEN = os.getenv("BOT_TOKEN")

def main():
    app = ApplicationBuilder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("products", products))
    app.add_handler(CommandHandler("product", product_detail))
    

    app.run_polling()

if __name__ == "__main__":
    main()
