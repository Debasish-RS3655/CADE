import MasonryList from "react-native-masonry-list";
import React from 'react'

const ExploreGallery = () => { 
    return (
        <MasonryList

            images={[
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                // to include a dimensions field with the
                // actual width and height of the image or
                // it will throw an error.
                // { source: require("yourApp/image.png"),
                //     dimensions: { width: 1080, height: 1920 }
                // },
                // "width" & "height" is an alternative to the dimensions
                // field that will also be acceptable.
                // { source: require("yourApp/image.png"),
                //     width: 1080,
                //     height: 1920 },
                { source: { uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww" } },
                { uri: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    // Optional: Adding a dimensions field with
                    // the actual width and height for REMOTE IMAGES
                    // will help improve performance.
                    dimensions: { width: 1080, height: 1920 } },
                { URI: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    // Optional: Does not require an id for each
                    // image object, but is for best practices.
                    id: "blpccx4cn" },
                { url: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { URL: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ]}
            // Version *2.14.0 update
            // onEndReached={() => {
            //     // add more images when scrolls reaches end
            // }}
            
        />
    );

}

export default ExploreGallery
