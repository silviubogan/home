"use client";

import Image from "next/image";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Gallery } from "@/components/Gallery";
import { MatrixButton } from "@/components/MatrixButton";
import { MyImages } from "@/lib/images";
import Accordion from "@/components/Accordion";

import GitHubIcon from "@/components/GitHubIcon";
import WikipediaIcon from "@/components/WikipediaIcon";

import React from "react";

// am scris poezii, inclusiv optimiste, în exportul de pe Facebook și silviubogan.com

export function MegaHome({ images }: { images: MyImages }) {
  return (
    <main>
      <h1>Portofoliu: Silviu Bogan</h1>
      <Image src="avatar.jpg" width={250} height={150} alt="avatar" />
      <Accordion
        headers={[
          "Am tradus din engleză în română",
          "Am postat articole pe blogurile",
          "Am adunat scor pe StackExchange (inclusiv StackOverflow)",
          "Am realizat filme pe YouTube",
          "Am realizat în Electron un program testat pe Linux și Windows care pune periodic utilizatorul să facă clic pentru a continua, evitând orbecăirea",
          "Am realizat în WPF un joc educațional de tip blocuri de memorie",
          "Am realizat în WPF un joc educațional de tip snake",
          "Am realizat desene manuale",
          "Am realizat desene digitale",
          "Am realizat poze",
          "Am realizat grafică în GIMP",
          "Am realizat teme WordPress",
          "și câteva site-uri pentru o afacere",
          "Am realizat artă CSS",
          "Am realizat artă",
          "Pentru realizări am primit diplome, de exemplu",
          "Am realizat postări pe blogul vechi",
          "Am realizat cover-uri la melodii",
          "Am realizat contribuții la Wikipedia română",
        ]}
        items={[
          <ol key={101}>
            <li key={1}>
              <a href="https://wiki.manjaro.org/index.php/Main_Page/ro">
                pagina principală a Wiki-ului Linux Manjaro
              </a>
            </li>
            <li key={2}>
              <a href="https://wiki.manjaro.org/index.php/Manjaro/ro">
                https://wiki.manjaro.org/index.php/Manjaro/ro
              </a>
            </li>
            <li key={3}>
              <a href="https://wiki.manjaro.org/index.php/About_Manjaro/ro">
                https://wiki.manjaro.org/index.php/About_Manjaro/ro
              </a>
            </li>
          </ol>,
          <ul key={102}>
            <li key={1}>
              <a href="https://calealinux.wordpress.com">
                https://calealinux.wordpress.com
              </a>
            </li>
            <li key={2}>
              <a href="https://silviubogan.blogspot.com">
                https://silviubogan.blogspot.com
              </a>
            </li>
          </ul>,
          <a key={103} href="https://stackexchange.com/users/94724">
            <Image
              src="https://stackexchange.com/users/flair/94724.png"
              width="208"
              height="58"
              alt="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites"
              title="profile for silviubogan on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            />
          </a>,
          <ol key={104}>
            <li>
              Controlul versiunilor cu Git (teorie)
              <LiteYouTubeEmbed
                id="EWXL0Xjh0P0"
                title="Controlul versiunilor cu Git (teorie)"
              />
            </li>
            <li>
              Un început de proiect Turnurile din Hanoi în Unity
              <LiteYouTubeEmbed
                id="itq3OVe3pqs"
                title="Un început de proiect Turnurile din Hanoi în Unity"
              />
            </li>
            <li>
              Truc pentru a scrie repede mesajele de commit Git
              <LiteYouTubeEmbed
                id="gioabeN6O4A"
                title="Truc pentru a scrie repede mesajele de commit Git"
              />
            </li>
            <li>
              Câteva minute despre NPM
              <LiteYouTubeEmbed
                id="EYhT94V9Kas"
                title="Câteva minute despre NPM"
              />
            </li>
            <li>
              Versuri recitate: Poezie picată din Cer
              <LiteYouTubeEmbed
                id="rNs7LWg2wdc"
                title="Poezie picată din Cer"
              />
            </li>
            <li>
              Introducere în CodeSandbox, prototip
              <LiteYouTubeEmbed
                id="w24QZSyYNmE"
                title="WIP Video 20.12.2020 (primul din 2021)"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unui ecran cu numărătoare inversă
              <LiteYouTubeEmbed
                id="vio7nzu0sBg"
                title="Tutorial Unity pentru crearea unui ecran cu numărătoare inversă"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unui indicator de sănătate
              <LiteYouTubeEmbed
                id="Zdz6NFnfFwA"
                title="Tutorial Unity pentru crearea unui indicator de sănătate"
              />
            </li>
            <li>
              Tutorial Unity pentru crearea unei animații de glisare
              <LiteYouTubeEmbed
                id="L3ePQSttC2s"
                title="Tutorial Unity pentru crearea unei animații de glisare"
              />
            </li>
            <li>
              Scurt video de prezentare a unui prototip de gestionar de fișiere
              bazat pe Qt (Qt Widgets)
              <LiteYouTubeEmbed
                id="fuwDizAz6j0"
                title="qt-file-manager 2017 08 26 01 12 19"
              />
            </li>
            <li>
              Analiza aplicației Weather pe Windows 10 (25.09.2016)
              <LiteYouTubeEmbed
                id="CmmkqpDIs0M"
                title="Analiza aplicației Weather pe Windows 10 (25.09.2016)"
              />
            </li>
          </ol>,
          <React.Fragment key={1061}>
            <p>
              GitHub:{" "}
              <a href="https://github.com/silviubogan/reminder-to-see">
                <GitHubIcon /> remider-to-see
              </a>
            </p>
            <Gallery key={105} images={images.screenshot} />
          </React.Fragment>,
          <Gallery key={106} images={images.pozeJoc} />,
          <Gallery key={107} images={images.pozeJocSnake} />,
          <Gallery key={108} images={images.deseneManuale} />,
          <Gallery key={109} images={images.deseneDigitaleOriginale} />,
          <Gallery key={110} images={images.poze} />,
          <Gallery key={111} images={images.graficăÎnGimp} />,
          <Gallery key={112} images={images.temeWordPress} />,
          <Gallery key={113} images={images.afacereWordPress} />,
          <Gallery key={114} images={images.artăCss} />,
          <Gallery key={115} images={images.artă} />,
          <Gallery key={116} images={images.diplome} />,
          <Gallery key={117} images={images.articoleBlogVechi} />,
          <React.Fragment key={118}>
            <p>Vama Veche - Epilog (cover)</p>
            <LiteYouTubeEmbed
              id="YOHbc14l54c"
              title="Vama Veche - Epilog (cover)"
            />
          </React.Fragment>,
          <p key={119}>
            Vedeți profilul meu ro.wikipedia.org aici:{" "}
            <a href="https://ro.wikipedia.org/wiki/Utilizator:Silviubogan">
              <WikipediaIcon /> Utilizator:Silviubogan
            </a>
          </p>,
        ]}
      />
      <footer className="list-footer">
        <p>
          Lucrez cu Manjaro, NeoVim, Git, GitHub, React, Next.js, TypeScript,
          HTML, CSS, JavaScript, Volto.
        </p>
        <p>
          Contactați-mă{" "}
          <MatrixButton
            value="pe X (silviubogan)"
            href="https://x.com/silviubogan"
          />{" "}
          pentru feedback, ajutor sau alte întrebări.
        </p>
        <p>
          Pe{" "}
          <a href="https://www.github.com/silviubogan">
            <GitHubIcon /> GitHub
          </a>{" "}
          am câteva depozite interesante și contribuții la Volto.
        </p>
      </footer>
    </main>
  );
}
