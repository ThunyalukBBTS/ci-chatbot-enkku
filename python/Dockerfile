# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files into the container
COPY . /app/

# Expose the port your application runs on (if applicable)
# If your app runs on port 8000, for example:
# EXPOSE 8000

# Specify the command to run on container startup
CMD ["python", "app.py"]