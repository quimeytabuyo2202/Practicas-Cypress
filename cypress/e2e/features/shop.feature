Feature: 02 - Crowdar Academy 2023 - Shop Store

    # @shop @rangoPrecio
    # Scenario: Buscar por rango de precio
    #     When Ingreso user '<user>' y pass '<pass>' 
    #     Then Ingreso al shop
    #     Then Busco por rango de precio, de medio a mayor
    #     Then Ingreso al rango de busqueda marcada
    #     Then Verifico que ingreso al rango de busqueda deseada

    #     Examples:
    #       | user                                            |   pass                |
    #       | academyCypress_usuarioNormal@crowdaronline.com  |   Crowdar.2023!       |
    
    @shop @filtrarPorProductosAndroid
    Scenario: Filtrar por productos Android
        Given Navego al sitio automationtesting
        When Ingreso user '<user>' y pass '<pass>' 
        Then Ingreso al shop
        And Filtro por productos Android
        Then Verificar acceso correcto a seccion Android

        Examples:
          | user                                            |   pass                |
          | academyCypress_usuarioNormal@crowdaronline.com  |   Crowdar.2023!       |
    
    @shop @filtrarPorProductosSelenium
    Scenario: Filtrar por productos Android
        Given Navego al sitio automationtesting
        When Ingreso user '<user>' y pass '<pass>' 
        Then Ingreso al shop
        And Filtro por productos Selenium
        And Verificar acceso correcto a seccion Selenium

        Examples:
          | user                                            |   pass                |
          | academyCypress_usuarioNormal@crowdaronline.com  |   Crowdar.2023!       |