import { HeaderComponents } from "../components/header.components.js";
import { NavigationComponents } from "../components/navigation.components.js";
import { PostsComponents } from "../components/posts.components.js";
import { CreateComponents } from "../components/create.components.js";
import { FavoritesComponents } from "../components/favorite.components.js";

new HeaderComponents("#header");
const navigation = new NavigationComponents("#navigation");
const posts = new PostsComponents("#posts");
const create = new CreateComponents("#create");
const favorites = new FavoritesComponents("#favorites");

navigation.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorites", component: favorites },
]);
