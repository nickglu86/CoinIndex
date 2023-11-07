import React from "react";
import {
    Container,
} from "react-bootstrap";
import { resources } from "../services/mockdata/resources";

let resourcesComp = [];
for (const [key, value] of Object.entries(resources)) {
    resourcesComp.push(
        <div className="text-center my-4">
            <h2>{key}</h2>
            {
                value.map(
                    (resItem, index) => (
                        <a key={index} href={resItem["url"]} target="_blank" >
                            <img
                                src={resItem["img"]}
                                alt={resItem["name"]}
                                style={{ width: '230px', padding: '10px 20px'  }}
                            />
                        </a>)
                )
            }
        </div>
    )
}
const Resources = () => {
    return (
        <Container>
                {resourcesComp}
        </Container>
    );
};

export default Resources;
