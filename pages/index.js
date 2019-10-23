/* eslint-disable  */
import App from "../components/App";
import InfoBox from "../components/InfoBox";
import PostList from "../components/PostList";
import { withApollo } from "../lib/apollo";

const IndexPage = props => (
  <App>
    <InfoBox>
      ℹ️ Bura da ki örnekte <a href='fakeql.com'>fakeql</a> kullandığım için
      post isteği gerçekleştiremiyorum. Sayfayı <a href='/'>Yenilediğinizde</a>{" "}
      bilgilerin eski haline gelmemesi için localstroge da veri tutuyorum.
      Fotoğraf başlıkları , Beğenme Sayısı ve Fotoğraf, api tarafından geliyor.
      Önemli olanın tasarımdan ziyade işlevsellik olduğunu düşündüğüm için
      oldukça sadece bir tasarım kullandım.
    </InfoBox>
    <PostList />
  </App>
);

export default withApollo(IndexPage);
