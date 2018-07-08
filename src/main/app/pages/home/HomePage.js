import React from 'react';
import './home.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {SectionTitle} from '../../components/section-title/SectionTitle';
import {BlockTitle} from '../../components/block-title/BlockTitle';
import {BlockText} from '../../components/block-text/BlockText';
import {InputLabel} from '../../components/input-label/InputLabel';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {BlockSubtitle} from '../../components/block-subtitle/BlockSubtitle';
import {Link} from '../../components/link/Link';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleName} from '../../common/models/ArticleName';
import {ArticleLink, ArticleLinkSize} from '../../components/article-link/ArticleLink';
import {Helmet} from 'react-helmet';
import {Carousel, ResponsiveEmbed} from 'react-bootstrap';

export class HomePage extends React.Component {

  state = {
    userContact: ''
  };

  handleSendContact = () => {
    window.mixpanel.track(
      "Furnas | added user contact",
      {contact: this.state.userContact}
    );
  };

  handleUserContactInputChange = event => {
    this.setState({userContact: event.target.value});
  };

  handleContactsButtonClick = () => {
    window.scrollTo(0,document.body.scrollHeight);
  };

  render() {
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Шкаф-кровати Smikwell</title>
          <meta name="description" content="Шкаф-кровати с гарантией 20 лет"/>
        </Helmet>
        <div className="home">
          <div className="home__header">
            <div className="home__header-logo">
              Smikwell
            </div>
            <div>
              <a className="home__header-phone-link" href="tel:+7(916)466-66-30">
                +7(916) 466-66-30
              </a>
            </div>
          </div>
          <div className="home__main-screen">
            <div className="home__main-screen-background home__main-screen-background_1">
            </div>
            <div className="home__main-screen-background home__main-screen-background_2">
            </div>
            <div className="home__main-screen-background home__main-screen-background_3">
            </div>
            <div className="home__main-screen-container">
              <div className="home__main-screen-content">
                <div className="home__title">
                  Шкаф-кровати Smikwell с&nbsp;гарантией&nbsp;10&nbsp;лет
                </div>
                <ul className="home__main-screen-advantages-list">
                  <li className="home__main-screen-advantages-list-item">Надежно</li>
                  <li className="home__main-screen-advantages-list-item">Качественно</li>
                  <li className="home__main-screen-advantages-list-item">Умно</li>
                </ul>
                <Button className="home__main-screen-contact-button" onClick={this.handleContactsButtonClick}>
                  Связаться
                </Button>
              </div>
            </div>
          </div>
          <div className="home__advantages-screen">
            <div className="home__advantages-list-title">
              Преимущества
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Надежный подъемный механизм
              </div>
              <div className="home__advantages-list-block-body">
                Сконструирован с использованием немецких газовых амортизаторов “Stabilus”, рассчитаных на 10 000 подъемов.
                Стоит дорого, но гарантировано прослужит 25 лет без ремонта и замены.
                Китайские, российские, польские и другие аналоги - могут не прослужить и года.
              </div>
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Рама - металлическая сварная конструкция.
              </div>
              <div className="home__advantages-list-block-body">
                В отличие от рам из дерева или ДСП, даже усиленных металлом - служат в разы дольше,
                не трескаются, хорошо распределяют нагрузку.
              </div>
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Диван складывается без вашего участия
              </div>
              <div className="home__advantages-list-block-body">
                Диван и его спинка убираются автоматически, когда вы раскладываете кровать.
                Автоматика достигается без электропривода - только система простых рычагов.
                Стальные тяги и петли не усложняют конструкция - нечему ломаться.
              </div>
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Подсветка, usb-порты, розетки
              </div>
              <div className="home__advantages-list-block-body">
                Количество розеток, usb-портов, а также места их размещения - можно выбрать индивидуально.
              </div>
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Автоматически складывающиеся ножки
              </div>
              <div className="home__advantages-list-block-body">
                Не требуют никаких действий с вашей стороны.
                Это важно, иначе пришлось бы на промежуточном этапе подъёма-опускания,
                каждый раз, одной рукой придется их выдвигать/задвигать, а другой рукой, придерживать кровать.
              </div>
            </div>
            <div className="home__advantages-list-block">
              <div className="home__advantages-list-block-title">
                Увеличенное спальное место
              </div>
              <div className="home__advantages-list-block-body">
                Предусмотрена специальная панель, покрытая приятной на ощупь тканью - опора для подушек,
                которая увеличивает общую длину спального места более чем на 20 см.
                Благодаря ей «спрятана» ниша между задней стенкой шкафа и изголовьем кровати.
              </div>
            </div>
          </div>
          <div className="home__carousel-screen">
            <div className="home__carousel-title">
              Примеры шкаф-кроватей
            </div>
            <div>
              <Carousel>
                <Carousel.Item>
                  <div className="home__carousel-item-1"></div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="home__carousel-item-2"></div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="home__carousel-item-3"></div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="home__video-screen">
            <div className="home__video-title">
               Видео
            </div>
            <div>
              <ResponsiveEmbed a16by9>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6rAIaHk8tYU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </ResponsiveEmbed>
            </div>
          </div>
          <div className="home__contacts-screen">
            <div className="home__contacts-title">
              Контакты
            </div>
            <div>
              <a className="home__header-phone-link" href="tel:+7(916)466-66-30">
                +7(916) 466-66-30
              </a>
              <a className="home__header-phone-link" href="mailto:smikwell@yandex.ru">
                smikwell@yandex.ru
              </a>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

}
