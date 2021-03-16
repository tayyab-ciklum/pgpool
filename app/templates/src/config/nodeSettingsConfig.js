export const nodeSettingsConfig = [
    {
        key: 1,
        name:'Admin Settings',
        settings: {
          id: 1,
          name: "updated name",
          configFile: "/usr/local/etc/pgpool.conf",
          passwordFile: "/usr/local/etc/pcp.conf",
          logFile: "/tmp/pgpool.log",
          pgPoolCommand: "/usr/local/bin/pgpool",
          pcpClientDirectory: "/usr/local/bin",
          pcpHostname: "localhost",
          pcpRefreshTime: 7,
          clearQueryCache: true,
          demonMode: true,
          debugMode: true,
          shutdownMode: "fast",
          language: "en",
          createdAt: "2021-02-15T12:33:44",
          updatedAt: "2021-02-17T09:20:08",
        }
      },
       { key: 2,
        name:'Custom Settings',
        settings: {
          customName: "TEST_enviroment"
        }
      }
];