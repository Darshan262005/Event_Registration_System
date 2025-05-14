from flask import Flask, request, jsonify
from flask_cors import CORS

# Import transformers for conversational AI
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)

# Load the smaller conversational model (DialoGPT-small)
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-small")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-small")

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message', '')

    # Encode the user input and add end of string token
    input_ids = tokenizer.encode(user_message + tokenizer.eos_token, return_tensors='pt')

    # Generate a response (no conversation history)
    chat_history_ids = model.generate(
        input_ids,
        max_length=100,
        pad_token_id=tokenizer.eos_token_id,
        do_sample=True,
        top_k=50,
        top_p=0.95
    )

    # Decode the response
    response = tokenizer.decode(chat_history_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)

    return jsonify({"reply": response})

if __name__ == '__main__':
    app.run(port=5001, debug=True)