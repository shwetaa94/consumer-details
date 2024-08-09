

# Customer Management Application

A React application for managing customer details, displaying customer information, and updating images periodically. The app is built with TypeScript, Tailwind CSS, and includes responsive design to work across different devices.

## Deployment

The application is deployed and accessible at [https://consumer-details.vercel.app/](https://consumer-details.vercel.app/).

![Preview](/public/preview.png)

## Features

- **Customer List**: Display a list of customers with selectable details.
- **Customer Details**: View detailed information about a selected customer.
- **Photo Gallery**: Display a grid of images that updates every 10 seconds.
- **Responsive Design**: Adapt layout and text size for different screen sizes using Tailwind CSS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Static typing for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.


## Installation

To get started with this application, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/shwetaa94/consumer-details.git
cd consumer-details
```

### 2. Install Dependencies

```bash
npm install
```

or if you use Yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm start
```

or if you use Yarn:

```bash
yarn start
```

This will start the development server and open the application in your default browser at `http://localhost:3000`.

## Usage

### Customer List

The Customer List displays all customers. Clicking on a customer will update the selection and show detailed information on the right side of the screen.

### Customer Details

The Customer Details section shows detailed information about the selected customer, including:

- **Basic Info**: Name, age, gender, blood group.
- **Address Details**: Full address and birthdate.
- **Educational Details**: University, company details.
- **Physical Description**: Height, weight, eye color, and hair details.
- **Contact Info**: Phone and email.

The photo gallery on the side updates every 10 seconds with new images fetched from an API.

## Responsive Design

The application uses Tailwind CSS for styling, which includes responsive utility classes to ensure the layout adapts to different screen sizes:

- **Small Screens**: Reduced text size and layout adjustments.
- **Medium Screens**: Standard text sizes and layout.
- **Large Screens**: Enhanced layout with larger text and additional spacing.

## Deployment

The application is deployed and accessible at [https://consumer-details.vercel.app/](https://consumer-details.vercel.app/).

## Repository

The source code is available on GitHub at [https://github.com/shwetaa94/consumer-details](https://github.com/shwetaa94/consumer-details).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
