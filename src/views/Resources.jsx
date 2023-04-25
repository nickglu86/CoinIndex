import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { resources } from "../mockdata/resources";

let resourcesComp = [];
for (const [key, value] of Object.entries(resources)) {
    resourcesComp.push(
        <div className="text-center my-4">
            <h2>{key}</h2>
            {
                value.map(
                    (resItem, index) => (
                        <a key={index} href={resItem["url"]} >
                            <img
                                src={resItem["img"]}
                                alt={resItem["name"]}
                                style={{ width: '25%', minWidth : '200px', padding: '0 20px' }}
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
