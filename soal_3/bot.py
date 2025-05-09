import os
from telegram.ext import ApplicationBuilder, CommandHandler
from dotenv import load_dotenv

from commands.start import start


load_dotenv()
BOT_TOKEN = os.getenv("BOT_TOKEN")

def main():
    app = ApplicationBuilder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    
    
    
      

    app.run_polling()

if __name__ == "__main__":
    main()
