import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorInside from "../editorinside/EditorInside";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const {_id,title,details,image_url, category_id} = news;
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
          <Link to={`/category/${category_id}`} ><Button variant="danger">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
      <EditorInside></EditorInside>
    </div>
  );
};

export default News;
