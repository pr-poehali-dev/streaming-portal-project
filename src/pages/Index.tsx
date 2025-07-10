import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const movies = [
    {
      id: 1,
      title: "Космическая Одиссея",
      type: "movie",
      year: 2024,
      genre: "Фантастика",
      rating: 8.7,
      description:
        "Эпическое путешествие через галактики в поисках новых миров",
      image: "/img/434d4734-9284-49e8-beb2-d4e9578c99ba.jpg",
      quality: ["4K", "HD", "SD"],
      duration: "2ч 15мин",
      country: "США",
    },
    {
      id: 2,
      title: "Киберпанк 2087",
      type: "movie",
      year: 2024,
      genre: "Фантастика",
      rating: 9.1,
      description:
        "Мрачное будущее, где человечество борется за выживание в цифровом мире",
      image: "/img/a23ca766-c303-4658-bca8-dd793aedf7f3.jpg",
      quality: ["4K", "HD"],
      duration: "2ч 45мин",
      country: "США",
    },
    {
      id: 3,
      title: "Семейная Драма",
      type: "movie",
      year: 2023,
      genre: "Драма",
      rating: 8.9,
      description:
        "Трогательная история о семье и преодолении жизненных испытаний",
      image: "/img/a4b2deb1-ac5d-42ba-b1ea-5f686e21beb8.jpg",
      quality: ["HD", "SD"],
      duration: "1ч 55мин",
      country: "Франция",
    },
    {
      id: 4,
      title: "Детектив Нуар",
      type: "series",
      year: 2024,
      genre: "Триллер",
      rating: 8.5,
      description:
        "Захватывающий сериал о детективе, расследующем загадочные преступления",
      image: "/img/434d4734-9284-49e8-beb2-d4e9578c99ba.jpg",
      quality: ["4K", "HD", "SD"],
      duration: "8 серий",
      country: "Великобритания",
    },
  ];

  const genres = [
    "Все",
    "Фантастика",
    "Драма",
    "Триллер",
    "Комедия",
    "Ужасы",
    "Документальный",
  ];
  const years = ["Все", "2024", "2023", "2022", "2021", "2020"];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || movie.genre === selectedGenre;
    const matchesYear =
      selectedYear === "all" || movie.year.toString() === selectedYear;

    return matchesSearch && matchesGenre && matchesYear;
  });

  const MovieCard = ({ movie }) => (
    <Card className="group hover:scale-105 transition-transform duration-300 bg-gray-800 border-gray-700 overflow-hidden">
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
        />
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded">
          <span className="text-yellow-400 font-bold flex items-center gap-1">
            <Icon name="Star" size={16} />
            {movie.rating}
          </span>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant={movie.type === "movie" ? "default" : "secondary"}>
            {movie.type === "movie" ? "Фильм" : "Сериал"}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg group-hover:text-red-400 transition-colors">
          {movie.title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm line-clamp-2">
          {movie.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.quality.map((quality) => (
            <Badge key={quality} variant="outline" className="text-xs">
              {quality}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
          <span>
            {movie.year} • {movie.genre}
          </span>
          <span>{movie.duration}</span>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-red-600 hover:bg-red-700">
            <Icon name="Play" size={16} className="mr-2" />
            Смотреть
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Heart" size={16} />
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-red-500 flex items-center gap-2">
                <Icon name="Film" size={32} />
                КиноПортал
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-red-400 transition-colors">
                  Главная
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Фильмы
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Сериалы
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Новинки
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Поиск фильмов и сериалов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Смотрите лучшие фильмы и сериалы
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Огромная коллекция контента в высоком качестве с субтитрами и
              переводом
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Icon name="Play" size={20} className="mr-2" />
                Начать просмотр
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Filter" size={20} />
            Фильтры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Жанр</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem
                      key={genre}
                      value={genre === "Все" ? "all" : genre}
                    >
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Год</label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem
                      key={year}
                      value={year === "Все" ? "all" : year}
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Качество</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все</SelectItem>
                  <SelectItem value="4k">4K</SelectItem>
                  <SelectItem value="hd">HD</SelectItem>
                  <SelectItem value="sd">SD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="movies">Фильмы</TabsTrigger>
            <TabsTrigger value="series">Сериалы</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="movies" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies
                .filter((movie) => movie.type === "movie")
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="series" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies
                .filter((movie) => movie.type === "series")
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-500">
                КиноПортал
              </h4>
              <p className="text-gray-400">
                Лучшая платформа для просмотра фильмов и сериалов онлайн
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Фильмы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сериалы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Популярное
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Жанры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Фантастика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Драма
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Триллер
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Комедия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Условия использования
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Конфиденциальность
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КиноПортал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
