import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
import { useContext } from "react";
import getHourDiff from "../../util/getHourDiff";

const FeaturedArticleListContainer = styled.div`
  width: 100%;
  max-width: 976px;
  margin: 0 auto;

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const ArticleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto auto;
  gap: 1rem;
  padding: 16px 0;
  margin: 0;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
`;

const ListLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: var(--black);
  display: grid;

  /* Apply different grid positioning for the first item */
  ${({ $isFirst }) =>
    $isFirst &&
    `
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  `}

  &:hover {
    li > h2 {
      color: var(--red);
      text-decoration: underline;
    }
  }
`;

const List = styled.li``;

const ListTitle = styled.h2`
  color: var(--black);
  font-family: serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

  ${({ $isFirst }) =>
    $isFirst &&
    `
    font-size: 28px;
    line-height: 32px;
  `}
`;

const ListThumbnail = styled.img`
  width: 100%;
  height: 133px;
  object-fit: cover;

  ${({ $isFirst }) =>
    $isFirst &&
    `
    height: 270px;
  `}
`;

const Subsection = styled.span`
  color: var(--black);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

const Hour = styled.span`
  color: var(--red);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

function FeaturedArticleList() {
  const { articleList } = useContext(ArticleContext);

  return (
    <FeaturedArticleListContainer>
      <ArticleList>
        {articleList?.slice(0, 7).map((article, index) => {
          const thumbnail = article?.multimedia[19];
          const imgSrc = thumbnail?.url
            ? `https://static01.nyt.com/${thumbnail.url}`
            : "";
          const formedId = article?._id.toString().substring(14);
          const isFirst = index === 0;
          const pubDate = article.pub_date;
          const hourDiff = getHourDiff(pubDate);

          return (
            <ListLink
              key={article._id}
              to={`/news/articles/${formedId}`}
              $isFirst={isFirst}
            >
              <List>
                <ListThumbnail
                  src={imgSrc}
                  alt={thumbnail?.subtype || "Article Image"}
                  $isFirst={isFirst}
                />
                <ListTitle $isFirst={isFirst}>
                  {article.headline?.main}
                </ListTitle>
                <div>
                  <Subsection>
                    {article.subsection_name
                      ? article.subsection_name
                      : "General"}
                  </Subsection>{" "}
                  · {hourDiff < 1 ? <Hour>New</Hour> : <Hour>{hourDiff}h</Hour>}
                </div>
                {isFirst && <p>{article.abstract}</p>}
              </List>
            </ListLink>
          );
        })}
      </ArticleList>
    </FeaturedArticleListContainer>
  );
}

export default FeaturedArticleList;
