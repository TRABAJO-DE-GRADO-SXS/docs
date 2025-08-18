\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{ieeeupb}[2024/01/27 Clase de documento para trabajos de grado IEEE UPB]

% Cargar clase base article
\LoadClass[12pt,letterpaper]{article}

% Paquetes requeridos
\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage{times}
\RequirePackage{geometry}
\RequirePackage{titlesec}
\RequirePackage{titletoc}
\RequirePackage{fancyhdr}
\RequirePackage{graphicx}
\RequirePackage{caption}
\RequirePackage{array}
\RequirePackage{enumitem}
\RequirePackage{hyperref}
\RequirePackage{indentfirst}
\RequirePackage{setspace}
\RequirePackage{pdfpages}
\RequirePackage{tocloft}
\RequirePackage[spanish]{babel}
\RequirePackage{cite}
\RequirePackage{dirtytalk} % say
\RequirePackage{comment}
\RequirePackage{rotating} % rotate figures, tables...
\RequirePackage{amsfonts}
\RequirePackage{amsmath}
\RequirePackage{float} % related to figure and position
\RequirePackage{array} % Para la definición de nuevas columnas
\RequirePackage{makecell} % Para la división de líneas dentro de celdas
\RequirePackage{listings}
\RequirePackage{xcolor}
\RequirePackage{lscape}
\RequirePackage{tabularx}
\RequirePackage{listings}

% Comando para caption inferior
\newcommand{\lowercaption}[1]{%
    \caption*{#1}
}

\RequirePackage{lipsum} % allows break lines
\RequirePackage[htt]{hyphenat}

% METADATA
\hypersetup{colorlinks=true,
            linkcolor=black,
            linktoc=all,
            citecolor=black,
            pdftitle={TITULO DE PROYECTO},
            pdfauthor={AUTOR DE PDF},
            pdfcreator={CREADOR DE PDF}
            }

% Formato de los títulos según el nivel
% Para usar números romanos en las secciones
\renewcommand\thesection{\Roman{section}}

% Para usar letras en las subsecciones
\renewcommand\thesubsection{\Alph{subsection}}

% Para usar números 1) en el nivel 3
\renewcommand\thesubsubsection{\arabic{subsubsection}}

% Para usar letra a) en el nivel 4
\renewcommand\theparagraph{\alph{paragraph}}

% estilo para pseudocódigo formal
\definecolor{codegray}{rgb}{0.5,0.5,0.5}
\lstdefinestyle{pseudocode}{
    backgroundcolor=\color{white},   
    commentstyle=\color{gray},
    numberstyle=\tiny\color{codegray},
    basicstyle=\ttfamily\footnotesize,
    breakatwhitespace=false,         
    breaklines=true,
    captionpos=t,                    
    keepspaces=true,                 
    numbers=left,                    
    numbersep=5pt,                  
    showspaces=false,                
    showstringspaces=false,
    showtabs=false,                  
    tabsize=2
}

% Configuración de geometría, márgenes
\geometry{
    letterpaper,
    top=2.5cm,
    bottom=2.5cm,
    left=2.5cm,
    right=2.5cm
}

% Interlineado 1.5
\onehalfspacing

% Sangría de primera línea
\setlength{\parindent}{1.27cm}

% Para que la numeración de páginas, aparezca arriba a la derecha
% Configuración de encabezados y pies de página
\fancypagestyle{plain}{%
    \fancyhf{} % Limpia todos los campos
    \fancyhead[R]{\thepage} % Número de página en la esquina superior derecha
    \renewcommand{\headrulewidth}{0pt} % Sin línea en el encabezado
}
% Hacer que todas las páginas usen este estilo
\pagestyle{plain}
% Asegurar que la primera página use el mismo estilo
\AtBeginDocument{%
    \thispagestyle{plain}
}

% Para reiniciar paragraph (título nivel 4) letters a) b) ...
\setcounter{secnumdepth}{4} 

% reset font size different index
\renewcommand{\cfttoctitlefont}{\normalsize\bfseries}
\renewcommand{\cftlottitlefont}{\normalsize\bfseries}
\renewcommand{\cftloftitlefont}{\normalsize\bfseries}

% Formato básico del TOC
\titlecontents{section}
[0pt]                                    % margen
{\normalfont\addvspace{0.5em}}                       % formato general
{\thecontentslabel.\quad}                % número con punto
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage}      % puntos y página

\titlecontents{subsection}
[2em]                                    % margen
{\normalfont\addvspace{0.25em}}                            % formato general
{\thecontentslabel.\quad}                % número con punto
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage}      % puntos y página

\titlecontents{subsubsection}
[3em]                                    % margen
{\normalfont\addvspace{0.30em}}                            % formato general
{{\thecontentslabel})\quad}              % número con paréntesis
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage}      % puntos y página

\titlecontents{paragraph}
[4em]                                    % margen
{\normalfont}                            % formato general
{{\thecontentslabel})\quad}              % letra con paréntesis
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage}      % puntos y página

% Formato similar para listas de tablas y figuras
\titlecontents{figure}
[0pt]                                    % margen
{\normalfont\addvspace{0.25em}}          % formato general + espacio vertical
{Fig. \thecontentslabel \quad}         % etiqueta
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage}      % puntos y página

\titlecontents{lstlisting}
[0pt]                                    % margen
{\normalfont\addvspace{0.25em}}          % formato general + espacio vertical
{PsC. \thecontentslabel \quad}          % etiqueta
{}                                       % sin número
{\titlerule*[.5pc]{.}\contentspage} 

% Ajustes para las listas (agregar esto después de los titlecontents)
\setlength{\cftfigindent}{0pt}
\setlength{\cftfignumwidth}{3em}
\setlength{\cftbeforefigskip}{8pt}  % Espacio entre entradas de figuras

% Ajustes para lista de tablas también
\setlength{\cfttabindent}{0pt}
\setlength{\cfttabnumwidth}{3em}
\setlength{\cftbeforetabskip}{8pt}  % Espacio entre entradas de tablas

% Ajuste del margen derecho para todas las listas
\setlength{\cftfignumwidth}{2.5em}
\setlength{\cfttabnumwidth}{2.5em}
\setlength{\textwidth}{\dimexpr\paperwidth-5cm\relax}

% Formato de títulos
% Nivel 1 (Capítulos)
\titleformat{\section}
{\normalfont\bfseries\centering}
{\Roman{section}.}{1em}{}
\titlespacing*{\section}{0pt}{*4}{*4}

% Nivel 2
\titleformat{\subsection}
{\normalfont\bfseries\itshape\raggedright}
{\Alph{subsection}.}{1em}{}
\titlespacing*{\subsection}{0pt}{*3}{*3}

% Nivel 3
\titleformat{\subsubsection}[runin] 
{\normalfont\bfseries\itshape\hangafter=1\hangindent=0.6cm}
{\arabic{subsubsection})}{0.5em}{}[\:]
\titlespacing*{\subsubsection}{0.5cm}{*2}{0pt}

% Nivel 4
\titleformat{\paragraph}
{\normalfont\itshape}
{\alph{paragraph})}{1em}{}[\:]
\titlespacing*{\paragraph}{1cm}{*1}{*1}

% Configuración de tablas
\captionsetup[table]{
    labelsep=newline,
    justification=centering,
    singlelinecheck=false, % Asegura que también se aplique a captions de una línea
    labelfont={bf},
    name=TABLA,
    labelfont=bf,
    skip=10pt,
    list=no
}

% Configuración de figuras
\captionsetup[figure]{
    labelsep=space,
    justification=centering,
    name=Fig.,
    font=normalsize,
    skip=10pt
}

% Configuración de pseudocodes
\captionsetup[lstlisting]{
    labelsep=space,
    justification=centering,
    name=Pseudocódigo.,
    font=normalsize,
    skip=10pt
}

% Formato de listas
\setlist{leftmargin=1.27cm}

% Configuración de hipervínculos
\hypersetup{
    colorlinks=true,
    linkcolor=black,
    filecolor=black,
    urlcolor=blue,
}

% Comando para la portada (modificado para mantener la numeración)
\newcommand{\portada}[4]{
    \thispagestyle{fancy}  % Asegura que la portada tenga número de página
    \begin{center}
        {\bfseries #1\par}
        \vspace{5cm}
        {\bfseries #2\par}
        \vspace{0.5cm}
        \includegraphics[width=0.17\textwidth]{img/upb_logo.png}\par
        \vspace{0.3cm}
        {\bfseries TRABAJO DE GRADO PRESENTADO PARA OPTAR AL TÍTULO DE \\ INGENIERO DE SISTEMAS E INFORMÁTICA \par}
        \vspace{0.5cm}
        \vfill
        {\bfseries UNIVERSIDAD PONTIFICIA BOLIVARIANA\par}
        \vspace{0.28cm}
        {\bfseries #3\par}
        \vspace{0.28cm}
        {\bfseries #4\par}
        \vspace{0.28cm}
        {\bfseries BUCARAMANGA\par}
        \vspace{0.28cm}
        {\bfseries \number\year}
    \end{center}
    \clearpage
}

\newcommand{\contraportada}[6]{
    \thispagestyle{fancy}
    \begin{center}
        {\bfseries #1\par}
        \vspace{3.5cm}
        {\bfseries #2\par}
        \vspace{3cm}
        {\bfseries TRABAJO DE GRADO PARA OPTAR AL TÍTULO DE \\ INGENIERO DE SISTEMAS E INFORMÁTICA\par}
        \vspace{2.5cm}
        {\bfseries DIRECTOR\par}
        \vspace{0.25cm}
        {\bfseries #4\par}
        \vfill
        {\bfseries UNIVERSIDAD PONTIFICIA BOLIVARIANA\par}
        \vspace{0.28cm}
        {\bfseries #5\par}
        \vspace{0.28cm}
        {\bfseries #6\par}
        \vspace{0.28cm}
        {\bfseries BUCARAMANGA\par}
        \vspace{0.28cm}
        {\bfseries \number\year}
    \end{center}
    \clearpage
}