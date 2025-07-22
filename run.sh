#!/bin/bash

# Set environment variables
export PORT=8000

# # Create required directories
# mkdir -p db data

# Run the FastAPI server
uvicorn main:app --host 0.0.0.0 --port $PORT --reload