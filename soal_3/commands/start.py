from telegram import Update
from telegram.ext import ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    commands = (
        "/start - Tampilkan command\n"
        "/products - Daftar produk\n"
        "/product <id> - Detail produk\n"
    )
    await update.message.reply_text(commands)
