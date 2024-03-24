# Stockify
## Summary of the project
Stockify is an innovative platform that provides **real-time stock data** and is designed to enhance financial literacy and empower users in navigating the complexities of the <u>**capital market**</u>. Stockify offers a comprehensive suite of features tailored to meet the diverse needs of investors.  

Our platform provides users with the ability to input their **portfolio** data, including watchlists and transaction histories, serving as a personalized foundation for analysis. Through customizable **assessment reports** generated using sophisticated algorithms and machine learning models, Stockify offers actionable insights into users' financial performance and market trends.  

In addition to **personalized news** updates curated through correlation techniques, Stockify incorporates a context-aware **chatbot - StockWise**, delivering personalized advice and recommendations based on users' financial objectives and risk preferences. **Trend analysis** is simplified through the integration of animal icons, providing visual representations of market sentiment shifts.  

Stockify also serves as an **educational resource hub**, offering a wealth of articles and resources covering topics ranging from fundamental analysis to technical indicators, aimed at fostering greater awareness and understanding among users.  

With a focus on usability, reliability, and cutting-edge technology, Stockify is poised to revolutionize financial literacy and empower users to make informed investment decisions with confidence.  

## Technologies Used
1. Frontend: ReactJS (Javascript), TailwindCSS
2. Backend: Django (Python)
3. Database: MongoDB

## Getting Started
**Server**  
1. Open terminal
  ```
    cd server
    pip install -r requirements.txt
    python manage.py runserver
  ```
2. Access the server at `http://localhost:8000`.    

**Client**  
1. Install [Node.js]("https://nodejs.org/en/download")  
2. Open terminal
  ```
    cd client
    npm start
  ```
  if there is an error (below), run `npm install react-scripts --save` and try again
  ```
    'react-scripts' is not recognized as an internal or external command, operable program or batch file.
  ```
3. Access the web application in your web browser at `http://localhost:3000`.  
4. Extensions for VSCode:
   - ES7+ React/Redux/React-Native snippets (ID: dsznajder.es7-react-js-snippets)  
   - Tailwind CSS IntelliSense
