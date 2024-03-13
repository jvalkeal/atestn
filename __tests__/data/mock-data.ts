export const STAGING_PROFILES_1 = `
{
  "data": [
    {
      "autoStagingDisabled": false,
      "closeRuleSets": [],
      "deployURI": "http://localhost:8082/nexus/service/local/staging/deploy/maven2",
      "dropNotifyCreator": true,
      "dropNotifyRoles": [],
      "finishNotifyCreator": true,
      "finishNotifyRoles": [],
      "id": "2e32338b1a152",
      "inProgress": false,
      "mode": "BOTH",
      "name": "test",
      "order": 0,
      "promoteRuleSets": [],
      "promotionNotifyCreator": true,
      "promotionNotifyRoles": [],
      "promotionTargetRepository": "releases",
      "properties": {
        "@class": "linked-hash-map"
      },
      "repositoriesSearchable": true,
      "repositoryTargetId": "1",
      "repositoryTemplateId": "default_hosted_release",
      "repositoryType": "maven2",
      "resourceURI": "http://localhost:8082/nexus/service/local/staging/profiles/2e32338b1a152",
      "targetGroups": [
        "public"
      ]
    }
  ]
}
`;

export const STAGING_START_1 =
`
{
  "data": {
    "description": "test",
    "stagedRepositoryId": "test-1004"
  }
}
`;

export const REPOSITORY_1 =
`
{
  "repositoryId": "test-xxx",
  "transitioning": false,
  "type": "open",
  "notifications": 0
}
`;

export const REPOSITORY_2 =
`
{
  "repositoryId": "test-xxx",
  "transitioning": false,
  "type": "closed",
  "notifications": 0
}
`;

export const REPOSITORY_3 =
`
{
  "repositoryId": "test-xxx",
  "transitioning": false,
  "type": "open",
  "notifications": 3
}
`;

export const ACTIVITY_1 =
`
[
  {
    "events": [
      {
        "name": "repositoryCreated",
        "properties": [
          {
            "name": "id",
            "value": "test-1068"
          },
          {
            "name": "user",
            "value": "admin"
          },
          {
            "name": "ip",
            "value": "127.0.0.1"
          }
        ],
        "severity": 0,
        "timestamp": "2021-02-21T09:48:52.360Z"
      }
    ],
    "name": "open",
    "started": "2021-02-21T09:48:52.328Z",
    "stopped": "2021-02-21T09:48:52.364Z"
  },
  {
    "events": [
      {
        "name": "rulesEvaluate",
        "properties": [
          {
            "name": "id",
            "value": "54d4f20a11594"
          },
          {
            "name": "rule",
            "value": "checksum-staging"
          },
          {
            "name": "rule",
            "value": "signature-staging"
          }
        ],
        "severity": 0,
        "timestamp": "2021-02-21T09:48:53.110Z"
      },
      {
        "name": "ruleEvaluate",
        "properties": [
          {
            "name": "typeId",
            "value": "signature-staging"
          }
        ],
        "severity": 0,
        "timestamp": "2021-02-21T09:48:53.112Z"
      },
      {
        "name": "ruleFailed",
        "properties": [
          {
            "name": "typeId",
            "value": "signature-staging"
          },
          {
            "name": "failureMessage",
            "value": "No public key: Key with id: (f7caaa2cdc112d56) was not able to be located on <a href=\\"http://pool.sks-keyservers.net:11371\\">http://pool.sks-keyservers.net:11371</a>. Upload your public key and try the operation again."
          },
          {
            "name": "failureMessage",
            "value": "No public key: Key with id: (f7caaa2cdc112d56) was not able to be located on <a href=\\"http://pool.sks-keyservers.net:11371\\">http://pool.sks-keyservers.net:11371</a>. Upload your public key and try the operation again."
          }
        ],
        "severity": 1,
        "timestamp": "2021-02-21T09:48:53.283Z"
      },
      {
        "name": "ruleEvaluate",
        "properties": [
          {
            "name": "typeId",
            "value": "checksum-staging"
          }
        ],
        "severity": 0,
        "timestamp": "2021-02-21T09:48:53.285Z"
      },
      {
        "name": "rulePassed",
        "properties": [
          {
            "name": "typeId",
            "value": "checksum-staging"
          }
        ],
        "severity": 0,
        "timestamp": "2021-02-21T09:48:53.291Z"
      },
      {
        "name": "rulesFailed",
        "properties": [
          {
            "name": "id",
            "value": "54d4f20a11594"
          },
          {
            "name": "failureCount",
            "value": "1"
          }
        ],
        "severity": 1,
        "timestamp": "2021-02-21T09:48:53.292Z"
      },
      {
        "name": "repositoryCloseFailed",
        "properties": [
          {
            "name": "id",
            "value": "test-1068"
          },
          {
            "name": "cause",
            "value": "com.sonatype.nexus.staging.StagingRulesFailedException: One or more rules have failed"
          }
        ],
        "severity": 1,
        "timestamp": "2021-02-21T09:48:53.293Z"
      }
    ],
    "name": "close",
    "started": "2021-02-21T09:48:53.109Z",
    "startedByIpAddress": "127.0.0.1",
    "startedByUserId": "admin",
    "stopped": "2021-02-21T09:48:53.293Z"
  }
]
`;

export const ERROR_NO_REPO_1 =
`
{
  "errors": [
      {
          "id": "*",
          "msg": "No such repository: fake"
      }
  ]
}
`;

//
// $ gpg --list-keys
//
// pub   rsa2048 2021-02-15 [SC]
//       E650EE767B874E27E603CEACDC08086D5E574E8E
// uid           [ultimate] gpgtest <gpgtest@example.org>
// sub   rsa2048 2021-02-15 [E]
//
// with passphrase 'gpgtest'
//
export const TEST_PRIVATE_KEY =
`-----BEGIN PGP PRIVATE KEY BLOCK-----

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
g9Xgu7URmtGJUdc/sFUGyjPc6qHWuJGBpmeD
=Bjh7
-----END PGP PRIVATE KEY BLOCK-----`;

export const TEST_PRIVATE_KEY_BROKEN_NO_HEADER =
`lQPGBGAqnBUBCADgxpOFCaf4ngh7avZluA7afw1JFBxW+ZX8PYkBum7NqniZux4Q
CZisHYJFYm9SjEPScGcLRYsJTHX9FbJn3zU26VC7d0fJ7gaZqLq6/Wm3cALLNr3y
MUMdW5OdWmuoZ1eow6r2B0VNSqbtV0rQFGjIyg2zP9fE/FNU7IkEKasI7Adfh1JQ
MkhkJnIak2dDmAxhGGBQIIhixUEKq0+u3r2nhF/RC3MbE+nS7RNg+d4qi5LYky+N
8NLJvWzT3AeK/A20OgSC7AWZz8JO2/HaIm6ENvFbb+L1+vmQaRUUWasKOPEo9rYN
aGjuuoBiypOG4FkznIy/x+lndZzxXfNM9yOJABEBAAH+BwMCDQfLZUojqNn/9mr1
sFCPEJWWAivl3Uz1i+e6tSK0rGaYJCNpF2+In0+UQCuWGh6CQ/EsKLt/NXNRb5Un
SKywkXL8468wjhiLtGMSmgluy1nEDRArRrPGdKMiWTcp7TIPNyHWR8e9Mith0zzs
5us2kPF0Y/mPVtVZbVG6gik3O0ZhMii2DxoG24bSH2V8hZ83Vw1laQ+Bm262iqRH
O6ElyBLHEM/UGIBVhchkIXAQDLXwdSA65y7AcITH2MPKB7xCtxjJJc9jXnuVLCIg
kEpSCfu3ljXH1fQGU/PsTEdbL9J2FB5DDQhfomjlVynKiKKSTnCEbW4SOgwQ9Gb5
V3wDcDDyPvqM6ESqnJd6As6fs+Q59qmTEYzKQ9/OE0wSqbvSpTPNRDbZsQYhgfgV
O1yi8uZLihv5voA1uY2s9cGMElCalZV7qqx9MRWa1x5OdUqbviXJ/FKpEQfOjDUr
1z5vtA7JlRbCPOVlxQtgw4wkqoT7XE/EtM6KWoTS9osThGftOJSMviBKiRbyEHjM
IImrl4NgFO31FABuABOHBO6Z47firz0R10IHA02rqKPgvciW9EMTtLJ8oHKFmbkv
ReWOqXGvTf4IwvyeXZquw2yBFhIHYtPnZWxHSpi4pkW4YENGmjbL2HiKNXZ85cc3
5YelJoEmjuSvbDlUcaFKe8My409MtMRf5kfwCauKo0M0TWJ4MeV1Lg4f5coCunQ0
tVluPi2rOHbdSHotFfD2meZ8OXXG99vQlIt5MEF4WcLgSvBMYLHRbJHL4mBzE4hF
gzSX5diYJsmF9WYg18baCcnTva04oSMMfCCQ+mNRHCex+k5Ou8oaTpTYNtcHcFMs
Cdo7b9Z4L32BDK8qmhzlwalJC78QIhbPcDPk7e4tPB8stsxs2flKDqrLXgHyH77w
cOx+AjjCNkBytB1ncGd0ZXN0IDxncGd0ZXN0QGV4YW1wbGUub3JnPokBTgQTAQoA
OBYhBOZQ7nZ7h04n5gPOrNwICG1eV06OBQJgKpwVAhsDBQsJCAcCBhUKCQgLAgQW
AgMBAh4BAheAAAoJENwICG1eV06ODSMIAKIVYRqv/di/gaXaivY9R1I5GccQZHLE
FB7R6kA0DWBnZ/YhFWXQ5TxaSlKdMj7i8P08c5HmzAOTUUUTXzri+mNpg7qCJ0LS
rfB2yuh41BXHLROmxTvGnBzvPiaJbQs2787tBWO2+SlDLOmU55Ca6B3h2opBqXUN
zlxv9mqRN08IoV4HYzvPd255wUtpoIUDMXroj3OcpGk/8lwETEK2RLf2g199w7MF
xhaDxLtQcpPw9twJIZjFaDLltT/sk9kE24W5MMgxuLzXxDkDPczk/PlLGGklq29p
no8d5r/zURamn2295yt4wPe/D0WLJcfRMoaW9ZBTwWpeB9D/wWcDObidA8YEYCqc
FQEIALkDb9hLEwXKE5IhZg/1Ipq419Be3YhB6xf0ZdsscRr5BsrsJYF9d4J2wJ+I
OZ6lvjiEZwljG89oRE6FxQQ43/VMun/HCZrkmMDnDzzcY7pB+6fhV38GxnNP/JY+
kMkG/Yj7dlr4zzHGhJuXN6wrHd0GI1+Spa2GOuZH8hhtM7+EG9nrjWXc3z7IEbqr
T14lOXM0QJmS/LtH45VqzmrjCzgeaEha8SRLduEnmckL7HJNaPQGJMPnfZVadzSj
FS85jDrm2vsGIo2qh7Qz3a0Psjhfbouxo/k+e4eN87C80pbENl6wtPdGvwiBst2z
iiKv0f3tAu04biiwFEYUBhdc0RcAEQEAAf4HAwI2Mav1c9N3/v8Mc1J3gRjtpwej
F95Sxdxc5S6GnU8rUVWBOMPh0wdPe6AhQ2uPzyDqEKw2u48cHDNbZi1DIP6Pyj0t
nWmz6jEYWqKWW47ISTgy3MlIwVJ69pWSZAfbotDIL7ASOkm5hOD/7kXBvmdxmrhs
73CGKX4x/Xni4dmIAGQ2Ni9TNiIxmUdPpYDiIgG3DegQZo56LtDloQxBzKST82Kh
tPIG+vwfepRcALHD+FZ6QRcgMouQpXI1uRAyIyUtcQOKms9fMALTty04vXP9COmO
IytcVRpWUispSbdk0PPXIUCElANvO0FIAHelKa375QryBQABXyTdWsFPj866df5i
ZrnNRuyb+LonkP5bSxEHqlfx/DWlmJpGqc9l3RhiD+Wrd4XfQeSV4pyllieQ5DLJ
g7wZVPF8o2F18K/NhjAoZ/xee1MD228PW2PpwEqcguEgByhBMmy4mxtJmZhrcmof
rl4acNXkPTcEQO9Wi5cLVgC9wGcZjV61jGKdwQOHwz8W4PX020U+87qkxReHxiq1
CIFulFqvcduN+ii7HR91Bm7qo/N1qyHCZjZd1iAAoO7p+XdFeUfG0+0LgPxv/Hg9
lQBjE46k3reoQ5HS1lh3fsmoJXBgjTHDvnv0bRrr78AcvqKL4JjAz2MEaSlEn30u
UjuRxbKzP8acJpcGnzraxSCZvCj5KPRmT+actPMgfAekA3ZKXMNqxjlhUNYHMzW6
iotlngD5YH12W2I0/CQxwxULAL1AnnpRMMKb3rQEXg2YjCMLK3Pr0wYfEGu0k66h
arOQNruW4cpvNQ3YnCYPnYSwZn7jACaXPVvxPKdXFpb3NNKCVFpf0ls3oH9c1DQN
5HGBwPXwWTnIpfHqeb4M3iyMMOJW/uEpBP4tLGApOOWxwilST8l0CbwRLe76Z3Sd
ROOJATYEGAEKACAWIQTmUO52e4dOJ+YDzqzcCAhtXldOjgUCYCqcFQIbDAAKCRDc
CAhtXldOjp1HB/98U5K9QjrGSJ1K7d5lMuCxXd/9LnjY7jM1H52tNlWr0RRbBmnJ
kYmWKl1zJ/W9g7rEX3+43oWmNM9TKf82qI+4qmG+zOmtO5Nlx7Pg/jgS4U/RfgAC
p2eIrPS9mBAk7VcqTmaady2w65f2AC34OD2R9FwkYeSWkltstmC4NQnPET0HsUEJ
24rgUO8qsnfyGwb9XEKbHnHr4/GkHUahy/uPn7b0aClYJZBDn0Ja8yuM91vvNS9s
c6Q/8XM5z/sVGEtUpZx5272+ZMzz2GfvvWA80E8vR4fVqTyE8Mwb2M/JxIBYRXEB
g9Xgu7URmtGJUdc/sFUGyjPc6qHWuJGBpmeD
=Bjh7`;
