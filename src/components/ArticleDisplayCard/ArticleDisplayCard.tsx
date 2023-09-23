import React, { useEffect, useState } from "react";
import ArticleCards from "../ArticleCards/ArticleCards";

export interface RICardData {
    heading:string,
    byLine:string,
    category:string,
}

export namespace PICardData {}

export default function ArticleDisplayCard(props: RICardData) {

  return (
    <div>
      <ArticleCards.ScreenContainerLayout>
        <ArticleCards.Box>
          <ArticleCards.SimpleArticleCard
            data={{
              heading: props.heading,
              byLine: props.byLine ,
              category: props.category ,
            }}
          ></ArticleCards.SimpleArticleCard>
        </ArticleCards.Box>
      </ArticleCards.ScreenContainerLayout>
    </div>
  );
}
