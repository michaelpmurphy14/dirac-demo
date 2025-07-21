FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY ./main.py /app/
RUN pip install fastapi uvicorn python-multipart

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
