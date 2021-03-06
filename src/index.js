import React from 'react';
import ReactDOM from 'react-dom';

// 1 - Está importando las dependencias requeridas de los paquetes npm instalados.
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// ---------------------------------

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// 2 - Aquí puede crear el HttpLinkque conectará su ApolloClient instancia con la API GraphQL; su servidor GraphQL se ejecutará http://localhost:4000.
const token = 'YOUR_TOKEN';

const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  }
};

// 3 - Ahora crea instancias ApolloClient pasando httpLinkuna y una nueva instancia de un InMemoryCache.
const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});


// 4 - Finalmente, renderiza el componente raíz de su aplicación React. El Appestá envuelto con el componente de orden superior ApolloProviderque pasa el clientcomo un apoyo.
const Root = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker()