# Set up the django project
a. Install python
b. Create virtual environment
    - Open command prompt or terminal in the directory you want
    - Run 'python -m venv hackathon_env'
    - This will create a virtual environment called hackathon_env in that directory
    - Activate the virtual environment:
        On windows, run 'hackathon_env\Scripts\activate.bat' to activate
        On Mac or Linux, run 'hackathon_env\bin\activate'
    - Install all dependencies from the requirements.txt
        'pip install -r requirements.txt'
    - Once all dependencies are installed, start the django dev server
        - Run 'cd core' to change directory to the django project folder 'core'
        - Run 'python manage.py runserver'
        - Server will be ran on localhost:8000
        - Use the completed endpoints and test them out

# Completed API Endpoints
# Data validation is being handled on the server for all endpoints

1. /api/users/register/
    Register route.
    Send Post request with JSON payload
        E.g:
        {
            "email":"name@site.com",
            "username":"name",
            "password":"testing321"
        }
2. http://localhost:8000/api/token/
    Login route.
    Send Post request with JSON payload
    (email and password)
    E.g:
        {
            "email":"name@site.com",
            "password":"testing321"
        }
    Returns JSON response with access and refresh tokens

3. http://localhost:8000/api/users/
    Use this to test the use of the access and refresh tokens.
    Send GET request with Authorization header containing access token
        E.g: `Bearer ${access_token}` OR `JWT ${access_token}`
    Returns a JSON response of all users
    If user is not admin user (admin@site.com), authorization will fail
    If user is admin user, all users will be returned in JSON data
    If access token is invalid, send refresh token to refresh endpoint to get new access and refresh token and try again.
    If it still fails, redirect to login route and get new tokens

4. http://localhost:8000/api/token/refresh/
    Refresh token endpoint
    Send POST request with refresh token in JSON payload
    E.g: {
        "refresh":`${refresh_token}`
    }
    Returns new access and refresh tokens in JSON response


