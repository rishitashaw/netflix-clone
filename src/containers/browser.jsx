import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Cards, Loading, Header } from "../components/";
import * as ROUTES from "../constants/routes";
import logo from "./logo.svg";
import { FooterContainer } from "../containers/footer";

export default function BrowserContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slidesRows, setSlidesRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header
        src={category === "series" ? "13ry" : "joker1"}
        dontShowOnSmallViewPort
      >
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={logo}
              alt="netflix"
            ></Header.Logo>
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Profile>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Frame>
        {category === "films" ? (
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        ) : (
          <Header.Feature>
            <Header.FeatureCallOut>
              Watch 13 Reasons Why Now
            </Header.FeatureCallOut>
            <Header.Text>
              Hannah, a young woman who takes her own life. Two weeks after her
              tragic death, a classmate named Clay finds a mysterious box on his
              porch. Inside the box are recordings made by Hannah in which she
              explains the 13 reasons why she chose to commit suicide.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        )}
      </Header>

      <Cards.Group>
        {slidesRows.map((slideItem) => (
          <Cards key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Cards.Title>{slideItem.title}</Cards.Title>
            <Cards.Entities>
              {slideItem.data.map((item) => (
                <Cards.Item key={item.docId} item={item}>
                  <Cards.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Cards.Meta>
                    <Cards.SubTitle>{item.title}</Cards.SubTitle>
                    <Cards.Text>{item.description}</Cards.Text>
                  </Cards.Meta>
                </Cards.Item>
              ))}
            </Cards.Entities>
            <Cards.Feature category={category}>
              {/* <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player> */}
            </Cards.Feature>
          </Cards>
        ))}
      </Cards.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
