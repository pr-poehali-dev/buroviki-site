import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Pipe {
  id: number;
  name: string;
  diameter: string;
  length: string;
  material: string;
  pressure: string;
  price: number;
  inStock: boolean;
}

interface SparePart {
  id: number;
  name: string;
  category: string;
  compatibility: string;
  price: number;
  inStock: boolean;
}

interface Well {
  id: number;
  lat: number;
  lng: number;
  depth: number;
  date: string;
  details?: string;
}

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedWell, setSelectedWell] = useState<Well | null>(null);

  const pipes: Pipe[] = [
    {
      id: 1,
      name: 'Труба буровая стальная',
      diameter: '114 мм',
      length: '6000 мм',
      material: 'Сталь 40ХН',
      pressure: '40 МПа',
      price: 15000,
      inStock: true
    },
    {
      id: 2,
      name: 'Труба обсадная',
      diameter: '168 мм',
      length: '12000 мм',
      material: 'Сталь Д',
      pressure: '25 МПа',
      price: 28000,
      inStock: true
    },
    {
      id: 3,
      name: 'Труба НКТ',
      diameter: '73 мм',
      length: '8000 мм',
      material: 'Сталь 30ХГСА',
      pressure: '50 МПа',
      price: 12500,
      inStock: false
    },
    {
      id: 4,
      name: 'Труба бурильная тяжелая',
      diameter: '140 мм',
      length: '9000 мм',
      material: 'Сталь 45',
      pressure: '35 МПа',
      price: 21000,
      inStock: true
    }
  ];

  const spareParts: SparePart[] = [
    {
      id: 1,
      name: 'Долото шарошечное',
      category: 'Буровой инструмент',
      compatibility: 'Все модели буровых установок',
      price: 45000,
      inStock: true
    },
    {
      id: 2,
      name: 'Гидравлический насос',
      category: 'Гидравлика',
      compatibility: 'УРБ-2А2, УРБ-3А3',
      price: 85000,
      inStock: true
    },
    {
      id: 3,
      name: 'Фильтр масляный',
      category: 'Расходники',
      compatibility: 'Универсальный',
      price: 2500,
      inStock: true
    },
    {
      id: 4,
      name: 'Коронка алмазная',
      category: 'Буровой инструмент',
      compatibility: 'Скважины до 1000м',
      price: 125000,
      inStock: false
    }
  ];

  const wells: Well[] = [
    { id: 1, lat: 55.751244, lng: 37.618423, depth: 450, date: '15.03.2024', details: 'Скважина на воду, дебит 3 м³/ч' },
    { id: 2, lat: 55.756244, lng: 37.625423, depth: 680, date: '22.02.2024', details: 'Геологоразведка, глубина 680м' },
    { id: 3, lat: 55.748244, lng: 37.612423, depth: 320, date: '10.04.2024', details: 'Бытовая скважина, песчаный слой' },
    { id: 4, lat: 55.761244, lng: 37.632423, depth: 890, date: '05.01.2024', details: 'Промышленная скважина' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Drill" className="text-accent-foreground" size={28} />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">ООО «Геомир»</h1>
              <p className="text-sm text-muted-foreground">Буровые технологии будущего</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <a href="#parts" className="text-sm font-medium hover:text-accent transition-colors">Запчасти</a>
            <a href="#map" className="text-sm font-medium hover:text-accent transition-colors">Наши работы</a>
            <Button variant="outline" size="sm" onClick={() => setIsAdmin(!isAdmin)}>
              <Icon name="User" size={16} className="mr-2" />
              {isAdmin ? 'Администратор' : 'Войти'}
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Профессиональное буровое оборудование
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Поставляем трубы различных диаметров и запчасти для буровых машин. Более 15 лет опыта в геологоразведке и бурении скважин.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20 text-primary-foreground">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Каталог труб</h2>
            <p className="text-muted-foreground text-lg">Широкий ассортимент буровых труб различных диаметров</p>
          </div>
          
          <Tabs defaultValue="all" className="animate-scale-in">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="instock">В наличии</TabsTrigger>
              <TabsTrigger value="preorder">Под заказ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {pipes.map((pipe, index) => (
                  <Card key={pipe.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-heading text-xl">{pipe.name}</CardTitle>
                          <CardDescription>Артикул: TR-{pipe.id.toString().padStart(4, '0')}</CardDescription>
                        </div>
                        {pipe.inStock ? (
                          <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20">В наличии</Badge>
                        ) : (
                          <Badge variant="secondary">Под заказ</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize2" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Диаметр:</span>
                          <span className="font-medium">{pipe.diameter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Длина:</span>
                          <span className="font-medium">{pipe.length}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="HardHat" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Материал:</span>
                          <span className="font-medium">{pipe.material}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Gauge" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Давление:</span>
                          <span className="font-medium">{pipe.pressure}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Цена</p>
                          <p className="text-2xl font-bold text-foreground font-heading">{pipe.price.toLocaleString()} ₽</p>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instock">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {pipes.filter(p => p.inStock).map((pipe, index) => (
                  <Card key={pipe.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-heading text-xl">{pipe.name}</CardTitle>
                          <CardDescription>Артикул: TR-{pipe.id.toString().padStart(4, '0')}</CardDescription>
                        </div>
                        <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20">В наличии</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize2" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Диаметр:</span>
                          <span className="font-medium">{pipe.diameter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Длина:</span>
                          <span className="font-medium">{pipe.length}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="HardHat" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Материал:</span>
                          <span className="font-medium">{pipe.material}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Gauge" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Давление:</span>
                          <span className="font-medium">{pipe.pressure}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Цена</p>
                          <p className="text-2xl font-bold text-foreground font-heading">{pipe.price.toLocaleString()} ₽</p>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="preorder">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {pipes.filter(p => !p.inStock).map((pipe, index) => (
                  <Card key={pipe.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-heading text-xl">{pipe.name}</CardTitle>
                          <CardDescription>Артикул: TR-{pipe.id.toString().padStart(4, '0')}</CardDescription>
                        </div>
                        <Badge variant="secondary">Под заказ</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize2" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Диаметр:</span>
                          <span className="font-medium">{pipe.diameter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Длина:</span>
                          <span className="font-medium">{pipe.length}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="HardHat" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Материал:</span>
                          <span className="font-medium">{pipe.material}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Gauge" size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">Давление:</span>
                          <span className="font-medium">{pipe.pressure}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Цена</p>
                          <p className="text-2xl font-bold text-foreground font-heading">{pipe.price.toLocaleString()} ₽</p>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="parts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Запасные части</h2>
            <p className="text-muted-foreground text-lg">Комплектующие для буровых машин и оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {spareParts.map((part, index) => (
              <Card key={part.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-xl">{part.name}</CardTitle>
                      <CardDescription>{part.category}</CardDescription>
                    </div>
                    {part.inStock ? (
                      <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20">В наличии</Badge>
                    ) : (
                      <Badge variant="secondary">Под заказ</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Wrench" size={16} className="text-muted-foreground mt-1" />
                      <div>
                        <span className="text-muted-foreground">Совместимость: </span>
                        <span className="font-medium">{part.compatibility}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Цена</p>
                      <p className="text-2xl font-bold text-foreground font-heading">{part.price.toLocaleString()} ₽</p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">География работ</h2>
            <p className="text-muted-foreground text-lg">Скважины, пробуренные нашей компанией</p>
          </div>
          
          <Card className="overflow-hidden animate-scale-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 bg-muted/20 p-8 min-h-[500px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Icon name="Map" size={64} className="text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Интерактивная карта работ</p>
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        {wells.map((well) => (
                          <button
                            key={well.id}
                            onClick={() => setSelectedWell(well)}
                            className={`p-4 rounded-lg border-2 transition-all hover:border-accent ${
                              selectedWell?.id === well.id ? 'border-accent bg-accent/10' : 'border-border bg-card'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Icon name="MapPin" size={16} className="text-accent" />
                              <span className="font-heading font-semibold">Скважина #{well.id}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{well.date}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 border-l border-border">
                  <h3 className="font-heading text-xl font-bold mb-4">Детали объекта</h3>
                  {selectedWell ? (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Номер скважины</p>
                        <p className="font-heading text-2xl font-bold text-accent">#{selectedWell.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Глубина</p>
                        <p className="text-lg font-semibold">{selectedWell.depth} метров</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Дата завершения</p>
                        <p className="text-lg font-semibold">{selectedWell.date}</p>
                      </div>
                      {isAdmin && selectedWell.details && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground mb-1">Дополнительная информация</p>
                          <p className="text-sm">{selectedWell.details}</p>
                          <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                            <div className="flex items-start gap-2">
                              <Icon name="MapPin" size={16} className="text-accent mt-1" />
                              <div className="text-xs">
                                <p className="font-medium text-accent">Координаты</p>
                                <p className="text-muted-foreground">
                                  {selectedWell.lat.toFixed(6)}, {selectedWell.lng.toFixed(6)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <Icon name="MousePointerClick" size={48} className="text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Выберите скважину на карте для просмотра деталей</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                  Скважин пробурено
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent font-heading">{wells.length}</p>
                <p className="text-sm text-muted-foreground mt-2">За последний год</p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Icon name="Drill" className="text-accent" size={24} />
                  Средняя глубина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent font-heading">
                  {Math.round(wells.reduce((acc, w) => acc + w.depth, 0) / wells.length)} м
                </p>
                <p className="text-sm text-muted-foreground mt-2">По всем объектам</p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Icon name="Award" className="text-accent" size={24} />
                  Опыт работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent font-heading">15+ лет</p>
                <p className="text-sm text-muted-foreground mt-2">На рынке буровых услуг</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Drill" className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold">ООО «Геомир»</h3>
              </div>
              <p className="text-sm text-primary-foreground/80">Профессиональное буровое оборудование и услуги</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#catalog" className="hover:text-accent transition-colors">Трубы буровые</a></li>
                <li><a href="#catalog" className="hover:text-accent transition-colors">Трубы обсадные</a></li>
                <li><a href="#parts" className="hover:text-accent transition-colors">Запчасти</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#map" className="hover:text-accent transition-colors">Наши работы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@geomir.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Буровая, 1
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 ООО «Геомир». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
