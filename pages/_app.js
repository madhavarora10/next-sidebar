import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";

import { ProSidebarProvider } from 'react-pro-sidebar';

function MyApp({ Component, pageProps }) {

    return (
      <ContentLayout>
       
         <Component {...pageProps} />
     
         
      </ContentLayout>
  );

}


export default MyApp
