---
presentation:
  width: 1500
  height: 800
  theme: night.css
---
<!-- slide -->

# Design Patterns   

São métodos para resolver problemas recorrentes, agindo como guias para estruturar o código de forma eficiente. Eles não são códigos prontos, mas diretrizes para criar soluções adaptáveis   


<!-- slide -->

## MVC   

- O padrão mvc tem o principio de dividir o projeto em camadas logicas, para separar as responsabilidades da aplicação.

- Ele pode ser divido nas camadas :
    - Controladora que é responsável por receber as requisições , recebe as interações do client e passar para camada de serviço
    - Camada de Serviço que é responsável por orquestrar a lógica de negócio e passar as informações para camada de acesso a dados
    - A camada de acesso a dados que é responsável  por  se comunicar com o banco de dados e fazer  as operações
    - Nos temos as entidades que são os objetos responsáveis para manter a integridade dos dados que serão salvos

<!-- slide -->

## Diagrama MVC (Camadas)   

ß

<!-- slide -->

## Inversão de controle   

Inversão de controle significa delegar as responsabilidades: ao invés de gerenciar todos os detalhes, o controle é transferido para entidades externas, otimizando a gestão e fluxo do processo.

<!-- slide -->

## Repository   

O padrão Repository abstrai a camada de acesso a dados, facilitando a modularização e teste do código. Utilizando o TypeORM em TypeScript, o padrão promove uma interação mais clara e eficiente com a base de dados, melhorando a manutenibilidade e escalabilidade da aplicação.

<!-- slide -->

## Padrão DTO   

O padrão DTO otimiza a transferência de dados entre camadas, aumentando a segurança ao prevenir riscos como injeções SQL, garantindo que apenas dados validados circulem na aplicação.

<!-- slide -->

# Padrões de criação   

Os padrões de projeto criacionais são um grupo de padrões que se concentram na maneira como os objetos são criados e instanciados em um programa

<!-- slide -->

## Abstract Factory   

O padrão Abstract Factory ajuda a criar grupos de objetos relacionados que se encaixam em um estilo ou configuração específica, tudo isso sem precisar saber exatamente quais objetos estão sendo criados.

<!-- slide -->

## Builder   

O padrão Builder é usado para criar objetos complexos passo a passo, permitindo que você crie diferentes variações de um objeto sem precisar lidar com muitos construtores complicados.

<!-- slide -->

## Factory Method   

O padrão Factory Method é usado para criar objetos, mas em vez de criar diretamente usando um construtor, você usa um método chamado "factory method". Esse método sabe como criar diferentes tipos de objetos, permitindo que você crie objetos de maneira flexível, de acordo com suas necessidades.

<!-- slide -->

## Singleton   

O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para essa instância.

<!-- slide -->

# Padrões estruturais   

Os padrões de projeto estruturais são um grupo de padrões que se concentram em como classes e objetos são organizados para formar estruturas maiores e mais complexas.  

<!-- slide -->

## Adapter   

O padrão Adapter é usado quando você tem duas classes com interfaces incompatíveis, mas você deseja que elas trabalhem juntas. O adaptador age como um intermediário entre essas classes, permitindo que elas se comuniquem.

<!-- slide -->

## Bridge   

O padrão Bridge é usado para separar duas dimensões diferentes de uma classe, permitindo que elas variem independentemente. Ele é útil quando você tem várias formas de uma entidade e várias maneiras de tratá-la, como diferentes formas e diferentes cores.

<!-- slide -->

## Facade   

O padrão Facade é usado para fornecer uma interface única e simplificada para um conjunto complexo de subsistemas ou classes. Ele ajuda a esconder a complexidade do sistema subjacente e oferece uma maneira fácil de interagir com ele.

<!-- slide -->

# Padrões comportamentais   

Padrões de projeto comportamentais lidam com algoritmos e a atribuição de responsabilidades entre objetos, facilitando a comunicação e interação entre eles

<!-- slide -->

## Chain of Responsibility      

O padrão Chain of Responsibility é usado quando você tem uma série de objetos que podem lidar com uma solicitação, mas você não sabe qual deles irá tratá-la até o momento em que a solicitação é feita. Cada objeto na cadeia tem a opção de tratar a solicitação ou passá-la para o próximo objeto na cadeia.

<!-- slide -->

## Padrão Observe   

O padrão Observer é usado para criar uma relação de dependência um-para-muitos entre objetos. Quando um objeto (chamado de "sujeito" ou "observável") muda de estado, todos os seus "observadores" (ou "ouvintes") são notificados e atualizados automaticamente.

<!-- slide -->

## Padrão Stratey 

O padrão de projeto Strategy é usado para definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Isso permite que um objeto mude seu comportamento de maneira flexível, escolhendo um algoritmo dentre vários disponíveis durante a execução do programa.

