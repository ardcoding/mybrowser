
// import React, { Component } from 'react';
// import axios from 'axios';

// class OpenAI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       prompt: '', // The input text for the OpenAI model
//       response: '', // The output text from the OpenAI model
//       error: null // The error message if any
//     };
//   }

//   handleChange = (event) => {
//     // Handle the change of the input text
//     this.setState({ prompt: event.target.value });
//   };

//   handleSubmit = (event) => {
//     // Handle the submission of the input text
//     event.preventDefault();
//     this.callOpenAI(); // Call the OpenAI API function
//   };

//   callOpenAI = () => {
//     // Call the OpenAI API using axios
//     const API_KEY = "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"; // Your OpenAI API key stored in a .env file
//     const ENGINE = 'davinci'; // The name of the OpenAI model
//     axios.post(`https://api.openai.com/v1/engines/${ENGINE}/completions`, {
//       prompt: this.state.prompt + '###', // The input text with a stop sequence
//       max_tokens: 20, // The maximum number of tokens to generate
//       temperature: 0.5, // The randomness of the generation
//       stop: '###' // The stop sequence to end the generation
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`
//       }
//     })
//       .then((response) => {
//         // Handle the success response
//         if (response.data && response.data.choices && response.data.choices[0]) {
//           // Check if the response data is valid
//           const text = response.data.choices[0].text; // Get the generated text
//           this.setState({ response: text, error: null }); // Update the state with the text and clear the error
//         } else {
//           // Handle the invalid response data
//           this.setState({ response: '', error: 'Invalid response data' }); // Clear the response and set the error message
//         }
//       })
//       .catch((error) => {
//         // Handle the error response
//         this.setState({ response: '', error: error.message }); // Clear the response and set the error message
//       });
//   };

//   render() {
//     return (
//       <div className="OpenAI">
//         <h1>OpenAI API Demo</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="prompt">Enter your prompt:</label>
//           <input type="text" id="prompt" value={this.state.prompt} onChange={this.handleChange} />
//           <button type="submit">Generate</button>
//         </form>
//         <div className="response">
//           {this.state.response ? <p>{this.state.response}</p> : null}
//           {this.state.error ? <p className="error">{this.state.error}</p> : null}
//         </div>
//       </div>
//     );
//   }
// }

// export default OpenAI;
