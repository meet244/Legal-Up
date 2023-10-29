from googletrans import Translator

# Create a Translator object
translator = Translator()

# Text you want to translate
text_to_translate = "Ich liebe dich."
text_to_translate = "Konichiwa"

# Detect the source language (optional)
detected_lang = translator.detect(text_to_translate).lang

# Translate the text to another language (e.g., Spanish)
translated_text = translator.translate(text_to_translate, dest='en')

print(f"Original Text: {text_to_translate}")
print(f"Detected Language: {detected_lang}")
print(f"Translated Text: {translated_text.text}")
