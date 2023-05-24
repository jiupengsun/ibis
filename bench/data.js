window.BENCHMARK_DATA = {
  "lastUpdate": 1684923839217,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "d41341b128237151ea06cab1226025f6cd3b2817",
          "message": "ci: error on no benchmark files found",
          "timestamp": "2023-05-19T11:10:46-04:00",
          "tree_id": "50571bbb4b127092fe560f75508fd993ca3ba9ae",
          "url": "https://github.com/ibis-project/ibis/commit/d41341b128237151ea06cab1226025f6cd3b2817"
        },
        "date": 1684509324339,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.97257555360083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120424741020257",
            "extra": "mean: 15.391109117646472 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.45733280238522,
            "unit": "iter/sec",
            "range": "stddev: 0.00013538661293325115",
            "extra": "mean: 6.3509268333348246 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.17456497651563,
            "unit": "iter/sec",
            "range": "stddev: 0.00009188780314613831",
            "extra": "mean: 8.9146768717967 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.07511284336725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014371614419302",
            "extra": "mean: 9.796707269229135 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.84810389120582,
            "unit": "iter/sec",
            "range": "stddev: 0.00010673671237694991",
            "extra": "mean: 5.686726088435293 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.3959970991195,
            "unit": "iter/sec",
            "range": "stddev: 0.000015541901611236034",
            "extra": "mean: 1.337978800905165 msec\nrounds: 663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.54048525443541,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847699810755458",
            "extra": "mean: 11.555285333331865 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.9201367851602,
            "unit": "iter/sec",
            "range": "stddev: 0.00072305865594224",
            "extra": "mean: 9.622774093026406 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.5814821204385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073862519204286",
            "extra": "mean: 3.551369900000307 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.32605869014763,
            "unit": "iter/sec",
            "range": "stddev: 0.0145143642203472",
            "extra": "mean: 11.858730450980232 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.46381905366914,
            "unit": "iter/sec",
            "range": "stddev: 0.0037323986246192925",
            "extra": "mean: 6.155216624999163 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.908456490928,
            "unit": "iter/sec",
            "range": "stddev: 0.000014915700063108271",
            "extra": "mean: 846.0892165616515 usec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.37227129751375,
            "unit": "iter/sec",
            "range": "stddev: 0.0008791428211225584",
            "extra": "mean: 10.485227901100316 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.65047624767743,
            "unit": "iter/sec",
            "range": "stddev: 0.000722463504865288",
            "extra": "mean: 9.465172666668252 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.57199901102523,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400688658491283",
            "extra": "mean: 27.343323499996092 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.83080917826237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003047276004787126",
            "extra": "mean: 3.6123146949155513 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146504.86998987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011890165307917823",
            "extra": "mean: 6.825711664527906 usec\nrounds: 38313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1730307.8737018807,
            "unit": "iter/sec",
            "range": "stddev: 3.112516948438699e-7",
            "extra": "mean: 577.9318323626219 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6370491901797848,
            "unit": "iter/sec",
            "range": "stddev: 0.0028322107142675352",
            "extra": "mean: 610.8551936000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12479.857193031574,
            "unit": "iter/sec",
            "range": "stddev: 0.000011635340019603806",
            "extra": "mean: 80.12912203501607 usec\nrounds: 4384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 176.10174106685895,
            "unit": "iter/sec",
            "range": "stddev: 0.01497406716084056",
            "extra": "mean: 5.6785355666661985 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.52010308713297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008190721936631617",
            "extra": "mean: 10.360535971426138 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4408.315169106256,
            "unit": "iter/sec",
            "range": "stddev: 0.00006640535790101035",
            "extra": "mean: 226.84403488390794 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.2238190635084,
            "unit": "iter/sec",
            "range": "stddev: 0.000386462645255338",
            "extra": "mean: 3.7990482911378494 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13935.254291728237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013443461122350004",
            "extra": "mean: 71.7604414720717 usec\nrounds: 7364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 190.0082692913746,
            "unit": "iter/sec",
            "range": "stddev: 0.011252220975141131",
            "extra": "mean: 5.2629288384629 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.620136843994885,
            "unit": "iter/sec",
            "range": "stddev: 0.0011902157934881065",
            "extra": "mean: 25.239690714283014 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 186.5852278668221,
            "unit": "iter/sec",
            "range": "stddev: 0.00016066685672805564",
            "extra": "mean: 5.359481087719144 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.80559800166628,
            "unit": "iter/sec",
            "range": "stddev: 0.0009569269029304659",
            "extra": "mean: 10.12088404123758 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.03808171476639,
            "unit": "iter/sec",
            "range": "stddev: 0.013925229376868582",
            "extra": "mean: 11.35872091397776 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.48434464287358,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076227469889557",
            "extra": "mean: 9.217919906249724 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10031.013484703966,
            "unit": "iter/sec",
            "range": "stddev: 0.000002030790686828605",
            "extra": "mean: 99.69082401542718 usec\nrounds: 4722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1036918.8400548846,
            "unit": "iter/sec",
            "range": "stddev: 1.2873552481413055e-7",
            "extra": "mean: 964.3956319156758 nsec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.05429847852577,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730621634185564",
            "extra": "mean: 10.303510670588794 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.51170785499359,
            "unit": "iter/sec",
            "range": "stddev: 0.00030981479032696923",
            "extra": "mean: 10.469920625000295 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.20014116121676,
            "unit": "iter/sec",
            "range": "stddev: 0.00044228024844426936",
            "extra": "mean: 21.18637731578812 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.54970363543065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008527514035330668",
            "extra": "mean: 10.465757212764306 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.561458736422157,
            "unit": "iter/sec",
            "range": "stddev: 0.000258338046647671",
            "extra": "mean: 116.80252522222645 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5992129809744253,
            "unit": "iter/sec",
            "range": "stddev: 0.0009245311398568445",
            "extra": "mean: 384.7318428000108 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.968040791695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003159776336098355",
            "extra": "mean: 3.6105248719006195 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7900281444239968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009967334455615834",
            "extra": "mean: 1.2657776903999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.61756235270056,
            "unit": "iter/sec",
            "range": "stddev: 0.0004371214197579621",
            "extra": "mean: 3.9429446081077035 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.854257662957735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317848771150162",
            "extra": "mean: 53.03841805263238 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.5611926128947,
            "unit": "iter/sec",
            "range": "stddev: 0.00016854783815190312",
            "extra": "mean: 9.656126728261405 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.70485490187156,
            "unit": "iter/sec",
            "range": "stddev: 0.00040782741947836755",
            "extra": "mean: 17.95175666037687 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2139.5515771610967,
            "unit": "iter/sec",
            "range": "stddev: 0.00008501448809304722",
            "extra": "mean: 467.3876576169611 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.3650238641922,
            "unit": "iter/sec",
            "range": "stddev: 0.000007000896712943647",
            "extra": "mean: 568.3868818783518 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6283453.2219220605,
            "unit": "iter/sec",
            "range": "stddev: 4.216046212539137e-9",
            "extra": "mean: 159.1481570215398 nsec\nrounds: 44842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.68506582258966,
            "unit": "iter/sec",
            "range": "stddev: 0.0008770746447430187",
            "extra": "mean: 9.931959539680216 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2719908.0807138286,
            "unit": "iter/sec",
            "range": "stddev: 1.4818452252752761e-8",
            "extra": "mean: 367.6594834547466 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.45471517030482,
            "unit": "iter/sec",
            "range": "stddev: 0.017958178378516272",
            "extra": "mean: 11.305219829996247 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.83046720868624,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869195645047192",
            "extra": "mean: 10.016982069307495 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7179854.289018681,
            "unit": "iter/sec",
            "range": "stddev: 4.6537341360368855e-9",
            "extra": "mean: 139.27859253768696 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2196.0261150662254,
            "unit": "iter/sec",
            "range": "stddev: 0.00007788116531429812",
            "extra": "mean: 455.36799090836087 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.067685571155174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007107079924640258",
            "extra": "mean: 39.89199550000251 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.23183467633453,
            "unit": "iter/sec",
            "range": "stddev: 0.000026770043132456224",
            "extra": "mean: 2.318938259162987 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16954334807798538,
            "unit": "iter/sec",
            "range": "stddev: 0.08321261614655355",
            "extra": "mean: 5.898196604800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.84196334608175,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718016049894615",
            "extra": "mean: 18.924353613635184 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.86891610070316,
            "unit": "iter/sec",
            "range": "stddev: 0.00007791907829648588",
            "extra": "mean: 9.357257811595044 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2164.259710230066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008280590478791633",
            "extra": "mean: 462.05175620706694 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.3056442955174,
            "unit": "iter/sec",
            "range": "stddev: 0.00026700099473935907",
            "extra": "mean: 3.5050130272368802 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.696108090175,
            "unit": "iter/sec",
            "range": "stddev: 0.00003844913043072873",
            "extra": "mean: 1.4583719933677841 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2170.5113932904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000884779807970517",
            "extra": "mean: 460.7209172415556 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9363154307152612,
            "unit": "iter/sec",
            "range": "stddev: 0.004994967990145117",
            "extra": "mean: 1.0680161483999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.50052789596418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854160725189728",
            "extra": "mean: 9.661786469390494 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.78951527771732,
            "unit": "iter/sec",
            "range": "stddev: 0.029263390081927455",
            "extra": "mean: 38.775447666673315 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2249.5435130631386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008304411246087244",
            "extra": "mean: 444.53463300131 usec\nrounds: 1406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.8375919688964,
            "unit": "iter/sec",
            "range": "stddev: 0.00028970357605349195",
            "extra": "mean: 3.638512449611227 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.84863700589223,
            "unit": "iter/sec",
            "range": "stddev: 0.0008519878941594715",
            "extra": "mean: 10.015159244897738 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.11546294965352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278326634750041",
            "extra": "mean: 7.929241796457658 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5426826.546331374,
            "unit": "iter/sec",
            "range": "stddev: 9.669852070709355e-9",
            "extra": "mean: 184.26975534647295 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6038355.709234419,
            "unit": "iter/sec",
            "range": "stddev: 9.257899237776523e-9",
            "extra": "mean: 165.60799796364853 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.34913666396022,
            "unit": "iter/sec",
            "range": "stddev: 0.0010178996794250397",
            "extra": "mean: 10.065512731956723 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.03957992893203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002652714601021163",
            "extra": "mean: 5.1010107263161775 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8537.719927766473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799728473272888",
            "extra": "mean: 117.12729024382591 usec\nrounds: 3690"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2150.434508159205,
            "unit": "iter/sec",
            "range": "stddev: 0.000085652952054967",
            "extra": "mean: 465.0222995426217 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1941669.6618388277,
            "unit": "iter/sec",
            "range": "stddev: 7.925889883078504e-8",
            "extra": "mean: 515.0206647679532 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.01840018859565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002260973566049235",
            "extra": "mean: 3.164372705523517 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4524485.67453709,
            "unit": "iter/sec",
            "range": "stddev: 1.1720709158549506e-8",
            "extra": "mean: 221.01959690717518 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.14011024456715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004480064098356511",
            "extra": "mean: 6.055464045161605 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.675708154942626,
            "unit": "iter/sec",
            "range": "stddev: 0.00025880472723459065",
            "extra": "mean: 20.975042400001104 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11170648.155410767,
            "unit": "iter/sec",
            "range": "stddev: 3.3910906857076098e-9",
            "extra": "mean: 89.52032022563117 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1857183.130881851,
            "unit": "iter/sec",
            "range": "stddev: 9.367452834575523e-8",
            "extra": "mean: 538.449861713512 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2180.732225838191,
            "unit": "iter/sec",
            "range": "stddev: 0.00012039623809654513",
            "extra": "mean: 458.5615731044823 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2222.744333126235,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540743323076678",
            "extra": "mean: 449.89429737675897 usec\nrounds: 1715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.2341312145562,
            "unit": "iter/sec",
            "range": "stddev: 0.00003913430993551667",
            "extra": "mean: 1.847629227957133 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2980246141951741,
            "unit": "iter/sec",
            "range": "stddev: 0.07460369839127932",
            "extra": "mean: 770.4014153999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9394256300180075,
            "unit": "iter/sec",
            "range": "stddev: 0.00309588357055392",
            "extra": "mean: 1.064480218599988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.81863654637799,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893057075955717",
            "extra": "mean: 9.821384708333861 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.63419297095908,
            "unit": "iter/sec",
            "range": "stddev: 0.004169103418165029",
            "extra": "mean: 4.702912480950686 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2137.2927794731177,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073161543960586",
            "extra": "mean: 467.88161622223726 usec\nrounds: 1196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.44662608318593,
            "unit": "iter/sec",
            "range": "stddev: 0.0008548002992616093",
            "extra": "mean: 9.95553597959417 msec\nrounds: 98"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "ae9ae7d07deb3f8e5802365fedfc54c56d04af2e",
          "message": "feat(duckdb): support 0.8.0",
          "timestamp": "2023-05-19T11:49:20-04:00",
          "tree_id": "961769f9a2bc9e9b5948f61116e07ccf3cbbb85a",
          "url": "https://github.com/ibis-project/ibis/commit/ae9ae7d07deb3f8e5802365fedfc54c56d04af2e"
        },
        "date": 1684511686383,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.91247590136432,
            "unit": "iter/sec",
            "range": "stddev: 0.000808718331957422",
            "extra": "mean: 10.426172305554834 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.3722840327288,
            "unit": "iter/sec",
            "range": "stddev: 0.000028700675016569838",
            "extra": "mean: 2.3675795922312743 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.9638761006267,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194852589115107",
            "extra": "mean: 3.6769589194632593 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7154437.868178635,
            "unit": "iter/sec",
            "range": "stddev: 4.943486742558138e-9",
            "extra": "mean: 139.77338519466608 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4411.064773708653,
            "unit": "iter/sec",
            "range": "stddev: 0.00002906555482594489",
            "extra": "mean: 226.70263333250458 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.38515465429614,
            "unit": "iter/sec",
            "range": "stddev: 0.0008528849252296048",
            "extra": "mean: 9.96163230951603 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.731438780913614,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066681486439347",
            "extra": "mean: 18.964018868416588 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6171221.891987349,
            "unit": "iter/sec",
            "range": "stddev: 9.896833459656397e-9",
            "extra": "mean: 162.04246379428616 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.7225986195698,
            "unit": "iter/sec",
            "range": "stddev: 0.00039537198272404943",
            "extra": "mean: 3.5749703632634513 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1884084.0198129446,
            "unit": "iter/sec",
            "range": "stddev: 8.671694330859597e-8",
            "extra": "mean: 530.7618925080008 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5572229.11982955,
            "unit": "iter/sec",
            "range": "stddev: 9.566640419991078e-9",
            "extra": "mean: 179.46139300726085 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.10202781507093,
            "unit": "iter/sec",
            "range": "stddev: 0.000292153448837453",
            "extra": "mean: 4.345898249987101 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.06233722658334,
            "unit": "iter/sec",
            "range": "stddev: 0.013011153698580982",
            "extra": "mean: 11.895933815218338 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 79.9737426124156,
            "unit": "iter/sec",
            "range": "stddev: 0.02026660465685459",
            "extra": "mean: 12.504104063834996 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.35591996404101,
            "unit": "iter/sec",
            "range": "stddev: 0.00024017390805746176",
            "extra": "mean: 9.964534233339842 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.57084998317237,
            "unit": "iter/sec",
            "range": "stddev: 0.00030615020417398673",
            "extra": "mean: 3.6822803333346124 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.01705706268102,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469856670114651",
            "extra": "mean: 9.802282371129202 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.215224176331585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341289746363633",
            "extra": "mean: 41.29633460000832 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147530.74900219156,
            "unit": "iter/sec",
            "range": "stddev: 3.277290290879978e-7",
            "extra": "mean: 6.778247970429168 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.9465159750496,
            "unit": "iter/sec",
            "range": "stddev: 0.00014033460535831685",
            "extra": "mean: 7.877333161286148 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1047046.0817926123,
            "unit": "iter/sec",
            "range": "stddev: 1.328261869717801e-7",
            "extra": "mean: 955.0678020664897 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 264.45984648355403,
            "unit": "iter/sec",
            "range": "stddev: 0.00017077940017928294",
            "extra": "mean: 3.7812923712113964 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.41427199805571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824683527367657",
            "extra": "mean: 11.707645298700939 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.66987877440836,
            "unit": "iter/sec",
            "range": "stddev: 0.01638811885834959",
            "extra": "mean: 12.244416362637661 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.66917994639385,
            "unit": "iter/sec",
            "range": "stddev: 0.0008714086092908562",
            "extra": "mean: 10.033191810525988 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.90033749818167,
            "unit": "iter/sec",
            "range": "stddev: 0.00031989544347504315",
            "extra": "mean: 3.598412326528906 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5884502.431834756,
            "unit": "iter/sec",
            "range": "stddev: 9.745109549247319e-9",
            "extra": "mean: 169.93790241111662 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.7979080932663,
            "unit": "iter/sec",
            "range": "stddev: 0.00010919005011320283",
            "extra": "mean: 6.297312174998382 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.9327795912372,
            "unit": "iter/sec",
            "range": "stddev: 0.0009528833909373993",
            "extra": "mean: 10.006726562499088 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2151.102387140663,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389297654745498",
            "extra": "mean: 464.8779184003615 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4519928.426443197,
            "unit": "iter/sec",
            "range": "stddev: 1.4092315034828355e-8",
            "extra": "mean: 221.24244139526343 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1920030.7766741558,
            "unit": "iter/sec",
            "range": "stddev: 1.2538820833132228e-7",
            "extra": "mean: 520.8249847599749 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.38078892306815,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485985690868093",
            "extra": "mean: 9.489395649998755 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.697914515228334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008236250925658499",
            "extra": "mean: 28.01284090624989 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.52721822100237,
            "unit": "iter/sec",
            "range": "stddev: 0.0009520716655271529",
            "extra": "mean: 10.149479687500573 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 70.32827216785762,
            "unit": "iter/sec",
            "range": "stddev: 0.055831354733388266",
            "extra": "mean: 14.21903267598025 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2131.893081895704,
            "unit": "iter/sec",
            "range": "stddev: 0.00009096572110626965",
            "extra": "mean: 469.06667529067096 usec\nrounds: 1121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 208.13908478066486,
            "unit": "iter/sec",
            "range": "stddev: 0.003724032160773651",
            "extra": "mean: 4.804479663460571 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 131.97683169641928,
            "unit": "iter/sec",
            "range": "stddev: 0.019334931982832305",
            "extra": "mean: 7.577087486842067 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2118.4979057001538,
            "unit": "iter/sec",
            "range": "stddev: 0.00008505553005619368",
            "extra": "mean: 472.0325648230956 usec\nrounds: 1103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2980606858604549,
            "unit": "iter/sec",
            "range": "stddev: 0.07536577579333041",
            "extra": "mean: 770.3800068000078 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.5676035955017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655506919222645",
            "extra": "mean: 1.860231147322747 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.58476019485569,
            "unit": "iter/sec",
            "range": "stddev: 0.0008300295027787024",
            "extra": "mean: 9.653929768422275 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12348.641099334596,
            "unit": "iter/sec",
            "range": "stddev: 0.000016774244567259737",
            "extra": "mean: 80.98057040898895 usec\nrounds: 5184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.59401547537662,
            "unit": "iter/sec",
            "range": "stddev: 0.033092040621817254",
            "extra": "mean: 26.59997841026004 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.99947089197707,
            "unit": "iter/sec",
            "range": "stddev: 0.00035173295197905326",
            "extra": "mean: 10.638357753621683 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.5951296454956,
            "unit": "iter/sec",
            "range": "stddev: 0.000024942519933760264",
            "extra": "mean: 1.4543442163640272 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.7374043814772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989856552961423",
            "extra": "mean: 3.6665304572646815 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2100.2375973036383,
            "unit": "iter/sec",
            "range": "stddev: 0.00008735012233666465",
            "extra": "mean: 476.13660534590775 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2138.8428374357864,
            "unit": "iter/sec",
            "range": "stddev: 0.00009238231385271351",
            "extra": "mean: 467.54253398013986 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10005.506857117723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017385459676116634",
            "extra": "mean: 99.94496173760747 usec\nrounds: 4443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.97325024087701,
            "unit": "iter/sec",
            "range": "stddev: 0.00007303321578296766",
            "extra": "mean: 8.851652916666913 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.6651954628023,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024242850571199",
            "extra": "mean: 561.5878844310739 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.1429826352576,
            "unit": "iter/sec",
            "range": "stddev: 0.000050461672732009256",
            "extra": "mean: 5.2592001352911 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6260690278210854,
            "unit": "iter/sec",
            "range": "stddev: 0.0020822997344215268",
            "extra": "mean: 614.9800426000297 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14001.172380284459,
            "unit": "iter/sec",
            "range": "stddev: 0.000002242579491226821",
            "extra": "mean: 71.42259039736807 usec\nrounds: 5603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.00295763830147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003187220709596489",
            "extra": "mean: 4.9750511721298585 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.1948029431444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601033279075059",
            "extra": "mean: 848.0363019783558 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.909547365744665,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121831656803913",
            "extra": "mean: 21.317622022723725 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2193.9561938171128,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348653478485734",
            "extra": "mean: 455.79761474643175 usec\nrounds: 1085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.07833452655335,
            "unit": "iter/sec",
            "range": "stddev: 0.000948432941627135",
            "extra": "mean: 10.09302391666663 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2160.386876485014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010513594699838486",
            "extra": "mean: 462.88005675493497 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7729951810793914,
            "unit": "iter/sec",
            "range": "stddev: 0.0036136151104566045",
            "extra": "mean: 1.293669125600013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.95769994014293,
            "unit": "iter/sec",
            "range": "stddev: 0.02033529977359892",
            "extra": "mean: 12.201416105263338 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.972102921735676,
            "unit": "iter/sec",
            "range": "stddev: 0.0012355221892052784",
            "extra": "mean: 17.24967613043181 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.270563961276565,
            "unit": "iter/sec",
            "range": "stddev: 0.00011153046146348938",
            "extra": "mean: 33.03539376667194 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8992161250324464,
            "unit": "iter/sec",
            "range": "stddev: 0.004755957712946231",
            "extra": "mean: 1.1120797016000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.4278204421422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764610781228555",
            "extra": "mean: 19.44472838636102 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.635970599821041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641531554986722",
            "extra": "mean: 115.79474344443952 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.965304666356,
            "unit": "iter/sec",
            "range": "stddev: 0.00025096313659806705",
            "extra": "mean: 3.5975712911376045 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.60406932705418,
            "unit": "iter/sec",
            "range": "stddev: 0.0008337997100188468",
            "extra": "mean: 9.746202139531755 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.0994235038417,
            "unit": "iter/sec",
            "range": "stddev: 0.02042574009854901",
            "extra": "mean: 12.180353494847703 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8461.008135620745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002539884033789068",
            "extra": "mean: 118.18922567749483 usec\nrounds: 4245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2105.683400458101,
            "unit": "iter/sec",
            "range": "stddev: 0.00009077388380999408",
            "extra": "mean: 474.9052016948253 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.422348312288305,
            "unit": "iter/sec",
            "range": "stddev: 0.0025690563370785856",
            "extra": "mean: 412.8225469999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.79954592216065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259384702348677",
            "extra": "mean: 10.02008567032917 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.32049738735655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007681013796739808",
            "extra": "mean: 10.275327673468258 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9025189262618665,
            "unit": "iter/sec",
            "range": "stddev: 0.0038226547836002905",
            "extra": "mean: 1.1080100049999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.98695863657922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005477833964024656",
            "extra": "mean: 52.6677294210488 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.1555498486022,
            "unit": "iter/sec",
            "range": "stddev: 0.000012053027174638824",
            "extra": "mean: 1.3330568576101611 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.41632633504327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177301140975776",
            "extra": "mean: 5.668409612502856 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.22429980472184,
            "unit": "iter/sec",
            "range": "stddev: 0.00003611602572473762",
            "extra": "mean: 9.240069021507958 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.80656336087064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008672538194959716",
            "extra": "mean: 9.822549421055795 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1614.253328769403,
            "unit": "iter/sec",
            "range": "stddev: 0.005960699850884931",
            "extra": "mean: 619.4814544767469 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.0909962475596,
            "unit": "iter/sec",
            "range": "stddev: 0.00032665904533945444",
            "extra": "mean: 3.5959452607008866 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1638447135078709,
            "unit": "iter/sec",
            "range": "stddev: 0.17460702969515882",
            "extra": "mean: 6.103340038200019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.8329008215027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002709328916863611",
            "extra": "mean: 3.176288111536853 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1682373.178614721,
            "unit": "iter/sec",
            "range": "stddev: 8.473005855800247e-8",
            "extra": "mean: 594.398444240182 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1929948.3519002267,
            "unit": "iter/sec",
            "range": "stddev: 8.761936346580316e-8",
            "extra": "mean: 518.1485810308864 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11421959.807682687,
            "unit": "iter/sec",
            "range": "stddev: 8.491921977571356e-9",
            "extra": "mean: 87.55064952408642 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.41757499083292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876137037072319",
            "extra": "mean: 9.860223931506836 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.05060088361271,
            "unit": "iter/sec",
            "range": "stddev: 0.000973062452990273",
            "extra": "mean: 26.99011557575831 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "cecc24cafe710e6247c110c6dd2a63f874440626",
          "message": "refactor(dask/pandas): align datatype conversions with the new convention",
          "timestamp": "2023-05-19T12:06:31-05:00",
          "tree_id": "cb89e000eb0caf6a388a9a44484ef74df63f2817",
          "url": "https://github.com/ibis-project/ibis/commit/cecc24cafe710e6247c110c6dd2a63f874440626"
        },
        "date": 1684516484176,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1713.4468341033173,
            "unit": "iter/sec",
            "range": "stddev: 0.00021381496530698603",
            "extra": "mean: 583.6189253711633 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.40484053689093,
            "unit": "iter/sec",
            "range": "stddev: 0.012049408437269257",
            "extra": "mean: 12.284281787233787 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.08937831103724,
            "unit": "iter/sec",
            "range": "stddev: 0.00036553001951570544",
            "extra": "mean: 22.68119983333179 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143957.18757243012,
            "unit": "iter/sec",
            "range": "stddev: 6.571529603515777e-7",
            "extra": "mean: 6.946509700996093 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.356903700822277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014978775490564378",
            "extra": "mean: 135.92674862499976 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.78294514179815,
            "unit": "iter/sec",
            "range": "stddev: 0.01303530134605733",
            "extra": "mean: 12.856288716980336 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.3509036465451,
            "unit": "iter/sec",
            "range": "stddev: 0.0008610197007500188",
            "extra": "mean: 11.716337581394532 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6569243233910961,
            "unit": "iter/sec",
            "range": "stddev: 0.006840437715947074",
            "extra": "mean: 1.522245355200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1514.5881074103463,
            "unit": "iter/sec",
            "range": "stddev: 0.000013342278294533179",
            "extra": "mean: 660.2455117053621 usec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.5864429071027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004271270624018404",
            "extra": "mean: 3.7511284861116128 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1632736.9377132426,
            "unit": "iter/sec",
            "range": "stddev: 2.797851754631542e-7",
            "extra": "mean: 612.4685348275191 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1599743.5909875003,
            "unit": "iter/sec",
            "range": "stddev: 2.0790961219120295e-7",
            "extra": "mean: 625.1001758242478 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.1208095816608,
            "unit": "iter/sec",
            "range": "stddev: 0.0010524893476489985",
            "extra": "mean: 11.7480085647053 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.04602538944991,
            "unit": "iter/sec",
            "range": "stddev: 0.0010012491566469125",
            "extra": "mean: 12.338668000000085 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 202.14850972232304,
            "unit": "iter/sec",
            "range": "stddev: 0.00039896204905402033",
            "extra": "mean: 4.946858135999264 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1596088.2876900071,
            "unit": "iter/sec",
            "range": "stddev: 1.3420812382884056e-7",
            "extra": "mean: 626.5317574927411 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.20025397639418,
            "unit": "iter/sec",
            "range": "stddev: 0.005139720600248916",
            "extra": "mean: 6.016837977528195 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1708.7493119877784,
            "unit": "iter/sec",
            "range": "stddev: 0.00026488612159657725",
            "extra": "mean: 585.223351947809 usec\nrounds: 770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5015354.769905604,
            "unit": "iter/sec",
            "range": "stddev: 2.99730733114866e-8",
            "extra": "mean: 199.38768958059381 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.426651722113,
            "unit": "iter/sec",
            "range": "stddev: 0.0012783073914041164",
            "extra": "mean: 13.08444079999731 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 64.300658021088,
            "unit": "iter/sec",
            "range": "stddev: 0.017919870470163936",
            "extra": "mean: 15.551940380952878 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.4479121425065,
            "unit": "iter/sec",
            "range": "stddev: 0.000330892801403856",
            "extra": "mean: 4.024988543378916 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1827.0065981965079,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135245027054129",
            "extra": "mean: 547.343398205091 usec\nrounds: 1449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1004.8369975345333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001666833758279678",
            "extra": "mean: 995.1862863863479 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5893970.474216922,
            "unit": "iter/sec",
            "range": "stddev: 7.378466064704508e-9",
            "extra": "mean: 169.66491508124847 nsec\nrounds: 56819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 72.26926235392469,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737314891341103",
            "extra": "mean: 13.837141371426956 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9733.880250952066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816189711282811",
            "extra": "mean: 102.73395338947081 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 73.49289108164797,
            "unit": "iter/sec",
            "range": "stddev: 0.015841013123064636",
            "extra": "mean: 13.60675822222092 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.010960018752836,
            "unit": "iter/sec",
            "range": "stddev: 0.002480765756596015",
            "extra": "mean: 62.45721673333453 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.553451681935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648008511545483",
            "extra": "mean: 10.922581089286407 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.62252721953715,
            "unit": "iter/sec",
            "range": "stddev: 0.0009061663382326371",
            "extra": "mean: 29.74196417391632 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1878.6909263969872,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886907803363593",
            "extra": "mean: 532.2855324147606 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1010723487184007,
            "unit": "iter/sec",
            "range": "stddev: 0.10197726723597819",
            "extra": "mean: 908.2055335999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.10931438153639,
            "unit": "iter/sec",
            "range": "stddev: 0.000754427493009425",
            "extra": "mean: 18.481106468080252 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.80100398593576,
            "unit": "iter/sec",
            "range": "stddev: 0.001054453357599004",
            "extra": "mean: 11.6548752758641 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.54386579604666,
            "unit": "iter/sec",
            "range": "stddev: 0.01585253554061974",
            "extra": "mean: 12.895926579546181 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.08732524910985,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814001163955637",
            "extra": "mean: 11.616111862069268 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.99456010531142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009608762980445629",
            "extra": "mean: 11.765458857142889 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9229968.13032092,
            "unit": "iter/sec",
            "range": "stddev: 5.67440313023889e-9",
            "extra": "mean: 108.34273595325335 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3598387.803465504,
            "unit": "iter/sec",
            "range": "stddev: 3.7804826645922984e-8",
            "extra": "mean: 277.90223139336297 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1819214351010614,
            "unit": "iter/sec",
            "range": "stddev: 0.0016362090006521181",
            "extra": "mean: 458.31164399999693 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 635.3289888969362,
            "unit": "iter/sec",
            "range": "stddev: 0.000022365972004412902",
            "extra": "mean: 1.5739876780000372 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.77011795284474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375776000438658",
            "extra": "mean: 4.205742961351952 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 459.61481126814203,
            "unit": "iter/sec",
            "range": "stddev: 0.000037964026210735884",
            "extra": "mean: 2.1757349316939094 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 84.72651808297573,
            "unit": "iter/sec",
            "range": "stddev: 0.0008727048293398276",
            "extra": "mean: 11.80268023077101 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.71048939622654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022797636899307",
            "extra": "mean: 4.593255946340876 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14514258873841426,
            "unit": "iter/sec",
            "range": "stddev: 0.1480876521891726",
            "extra": "mean: 6.8897765204 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.55749762585316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009338941237216822",
            "extra": "mean: 10.35652356976835 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.70820877036817,
            "unit": "iter/sec",
            "range": "stddev: 0.016581512894257865",
            "extra": "mean: 13.03641443373519 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.2069753074533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096495916807808",
            "extra": "mean: 4.251574591666933 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1839.1431848432273,
            "unit": "iter/sec",
            "range": "stddev: 0.00011228754441461719",
            "extra": "mean: 543.73145508257 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.51141533927594,
            "unit": "iter/sec",
            "range": "stddev: 0.034526413157344046",
            "extra": "mean: 39.1981388214262 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8836.340390719457,
            "unit": "iter/sec",
            "range": "stddev: 0.000003935238036650767",
            "extra": "mean: 113.1690219913065 usec\nrounds: 4138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4601386.836280702,
            "unit": "iter/sec",
            "range": "stddev: 2.20368626382756e-8",
            "extra": "mean: 217.3257836348535 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7772148931213603,
            "unit": "iter/sec",
            "range": "stddev: 0.00834777090629726",
            "extra": "mean: 1.2866454423999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.36881195900623,
            "unit": "iter/sec",
            "range": "stddev: 0.03322001999586693",
            "extra": "mean: 30.893935843751663 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.33757102978981,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014050961141719",
            "extra": "mean: 11.193498865852842 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.000715208051762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131256725947403",
            "extra": "mean: 45.453067799996916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7805931200343664,
            "unit": "iter/sec",
            "range": "stddev: 0.005013429997024944",
            "extra": "mean: 1.2810771378000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.53805841231425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358190890390991",
            "extra": "mean: 21.03577708888843 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.16782953993798,
            "unit": "iter/sec",
            "range": "stddev: 0.0010378069409200706",
            "extra": "mean: 11.741522654760942 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.26025742029992,
            "unit": "iter/sec",
            "range": "stddev: 0.004711538771054248",
            "extra": "mean: 7.504112774193599 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1367283.1530915978,
            "unit": "iter/sec",
            "range": "stddev: 4.260311658800889e-7",
            "extra": "mean: 731.3774017758319 nsec\nrounds: 140826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7278.312930977841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004521669333152387",
            "extra": "mean: 137.3944771931715 usec\nrounds: 2850"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1903.1613774844943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970434888954706",
            "extra": "mean: 525.4415163267715 usec\nrounds: 980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 363.4399068300221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191220745078614",
            "extra": "mean: 2.7514865076929813 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.060936411221807,
            "unit": "iter/sec",
            "range": "stddev: 0.00021870216414147475",
            "extra": "mean: 38.371606615386284 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.6761656000874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010037975621379592",
            "extra": "mean: 7.316564637363229 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.10373103266348,
            "unit": "iter/sec",
            "range": "stddev: 0.00016047875364422586",
            "extra": "mean: 11.222874602562062 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11993.1139435933,
            "unit": "iter/sec",
            "range": "stddev: 0.000004063401559630176",
            "extra": "mean: 83.38118062608737 usec\nrounds: 6101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 579.1551631972469,
            "unit": "iter/sec",
            "range": "stddev: 0.000039162824080003905",
            "extra": "mean: 1.7266529999999725 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 165.01845049472115,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350587935392954",
            "extra": "mean: 6.059928432257274 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5231371.555487705,
            "unit": "iter/sec",
            "range": "stddev: 1.3464805479058301e-8",
            "extra": "mean: 191.15445909227327 nsec\nrounds: 51811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1871.664205145041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010515757014357429",
            "extra": "mean: 534.2838727433519 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3868.5488303898037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000301132820928548",
            "extra": "mean: 258.49486302057034 usec\nrounds: 1847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.43280182475522,
            "unit": "iter/sec",
            "range": "stddev: 0.00032391974695949685",
            "extra": "mean: 4.057901353209976 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.04106112712932,
            "unit": "iter/sec",
            "range": "stddev: 0.026231753784039937",
            "extra": "mean: 14.27733937646849 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1824.367894316091,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184113610392177",
            "extra": "mean: 548.1350571425586 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.28432815241172,
            "unit": "iter/sec",
            "range": "stddev: 0.0010942835042833242",
            "extra": "mean: 12.455731062500774 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1789.238998256274,
            "unit": "iter/sec",
            "range": "stddev: 0.00012601408103042337",
            "extra": "mean: 558.896827631503 usec\nrounds: 1520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.02395838803184,
            "unit": "iter/sec",
            "range": "stddev: 0.00012031887257344305",
            "extra": "mean: 7.193004799999185 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 870383.289264782,
            "unit": "iter/sec",
            "range": "stddev: 1.897642578794413e-7",
            "extra": "mean: 1.1489191168234698 usec\nrounds: 71424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.19027825882142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001367977040215084",
            "extra": "mean: 6.702849620436788 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.48337950175724,
            "unit": "iter/sec",
            "range": "stddev: 0.00029937101041007096",
            "extra": "mean: 4.123993991071678 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.60442659199349,
            "unit": "iter/sec",
            "range": "stddev: 0.00009499556403470655",
            "extra": "mean: 11.160162929822866 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.75118572623997,
            "unit": "iter/sec",
            "range": "stddev: 0.023610978625764258",
            "extra": "mean: 14.33667384415239 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.05159980809795,
            "unit": "iter/sec",
            "range": "stddev: 0.00010365186426328133",
            "extra": "mean: 9.25483751999991 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.365200213139682,
            "unit": "iter/sec",
            "range": "stddev: 0.002406106303584982",
            "extra": "mean: 732.4932931999797 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.72320874520733,
            "unit": "iter/sec",
            "range": "stddev: 0.00004854589787269796",
            "extra": "mean: 5.823324682243391 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.229847985407744,
            "unit": "iter/sec",
            "range": "stddev: 0.00037059556506300456",
            "extra": "mean: 24.85716576315978 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.48819634343522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946737241105925",
            "extra": "mean: 4.140989146226586 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.2199875763161,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035958913503014",
            "extra": "mean: 4.077971008333018 msec\nrounds: 240"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0d896398cfae7319e0a4c751be1e4e90b72b1a9b",
          "message": "chore(flake/nixpkgs): `c8f6370f` -> `5dcb4a7a`",
          "timestamp": "2023-05-20T00:37:47Z",
          "tree_id": "e5773827d5d0d3907cbe05a5635b61374b7ad741",
          "url": "https://github.com/ibis-project/ibis/commit/0d896398cfae7319e0a4c751be1e4e90b72b1a9b"
        },
        "date": 1684543387208,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3373743.8259545434,
            "unit": "iter/sec",
            "range": "stddev: 6.335057746708843e-8",
            "extra": "mean: 296.40661875596527 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1618982.8871195605,
            "unit": "iter/sec",
            "range": "stddev: 8.955971481750332e-8",
            "extra": "mean: 617.6717542574933 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.32939360170946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900542304782037",
            "extra": "mean: 3.5928652272745736 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5707535.873982368,
            "unit": "iter/sec",
            "range": "stddev: 9.487103765719029e-9",
            "extra": "mean: 175.206958323074 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.4580991017759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004557740749706607",
            "extra": "mean: 3.992683820512592 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.030920872841302,
            "unit": "iter/sec",
            "range": "stddev: 0.02154016614958873",
            "extra": "mean: 124.51872155555242 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.1471599795682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112408165305071",
            "extra": "mean: 856.0565263177036 usec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.89348108774061,
            "unit": "iter/sec",
            "range": "stddev: 0.00007632649054465435",
            "extra": "mean: 7.9432230434795645 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 17.705726435619678,
            "unit": "iter/sec",
            "range": "stddev: 0.01692779892527876",
            "extra": "mean: 56.47890266666719 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1747.4947532255198,
            "unit": "iter/sec",
            "range": "stddev: 0.000008742168098578023",
            "extra": "mean: 572.2477839513987 usec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.72007732897458,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167845929989109",
            "extra": "mean: 10.447129044444459 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.17301033508511,
            "unit": "iter/sec",
            "range": "stddev: 0.009501613977695072",
            "extra": "mean: 10.849162855423808 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7288610.059440739,
            "unit": "iter/sec",
            "range": "stddev: 4.941979752886661e-9",
            "extra": "mean: 137.2003704196781 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.33960775769712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008674028478501631",
            "extra": "mean: 10.066478241379176 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.97527462480602,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256779038050424",
            "extra": "mean: 16.135467023807962 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12191139.094297191,
            "unit": "iter/sec",
            "range": "stddev: 3.3366248850456775e-9",
            "extra": "mean: 82.0267894790871 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.17053452124593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417250325121287",
            "extra": "mean: 27.64681288888937 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6431387.125456236,
            "unit": "iter/sec",
            "range": "stddev: 4.292211579716555e-9",
            "extra": "mean: 155.48745247223317 nsec\nrounds: 47847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.160049221906185,
            "unit": "iter/sec",
            "range": "stddev: 0.00026783184943110245",
            "extra": "mean: 20.341720885714462 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.885555338378416,
            "unit": "iter/sec",
            "range": "stddev: 0.0027808418976789377",
            "extra": "mean: 1.1292349068000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2329.329491776057,
            "unit": "iter/sec",
            "range": "stddev: 0.00008759725276189024",
            "extra": "mean: 429.30809210573494 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.6252518077541,
            "unit": "iter/sec",
            "range": "stddev: 0.00026372005883352405",
            "extra": "mean: 3.6019778225810137 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.70761764425419,
            "unit": "iter/sec",
            "range": "stddev: 0.0007422838668720066",
            "extra": "mean: 9.929735439998808 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.88402454597139,
            "unit": "iter/sec",
            "range": "stddev: 0.012392688555889984",
            "extra": "mean: 11.12544754255577 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.0115814651303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002412121674332961",
            "extra": "mean: 3.7734199934638633 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.27381644256266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007036944345025378",
            "extra": "mean: 6.124680746663293 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 22.256160393917703,
            "unit": "iter/sec",
            "range": "stddev: 0.06471784899548125",
            "extra": "mean: 44.931379999997034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3517395768031693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007397118222159104",
            "extra": "mean: 739.7874688000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.63951065563168,
            "unit": "iter/sec",
            "range": "stddev: 0.011226591020929563",
            "extra": "mean: 11.032716226804425 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.87178416715638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946240045717432",
            "extra": "mean: 9.62725352238817 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.9740387972089,
            "unit": "iter/sec",
            "range": "stddev: 0.00022388014080158098",
            "extra": "mean: 3.6633520330587013 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.67932567480293,
            "unit": "iter/sec",
            "range": "stddev: 0.00002826328235563551",
            "extra": "mean: 5.136652269231836 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.35740390930659,
            "unit": "iter/sec",
            "range": "stddev: 0.0004610432170653412",
            "extra": "mean: 36.55317600000103 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.27457097474047,
            "unit": "iter/sec",
            "range": "stddev: 0.00023506718720162623",
            "extra": "mean: 3.6459814573626503 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4831636698264266,
            "unit": "iter/sec",
            "range": "stddev: 0.0013009633101877863",
            "extra": "mean: 402.7120773999968 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2328.8381897430295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008511088963151542",
            "extra": "mean: 429.39866084484925 usec\nrounds: 1374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.55101827654832,
            "unit": "iter/sec",
            "range": "stddev: 0.01331524679167001",
            "extra": "mean: 11.421911700002044 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.47219831688751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260071735160351",
            "extra": "mean: 10.053060221051018 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4740.644481666554,
            "unit": "iter/sec",
            "range": "stddev: 0.00004105725894359516",
            "extra": "mean: 210.94178309875159 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.37436766887438,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769378526111142",
            "extra": "mean: 9.96270286154037 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2395.9949682818715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007885377033383621",
            "extra": "mean: 417.36314693393683 usec\nrounds: 1647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.759857953585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777067892336085",
            "extra": "mean: 1.8492496905823084 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.862423290640514,
            "unit": "iter/sec",
            "range": "stddev: 0.00020066108486155892",
            "extra": "mean: 16.988767096155318 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.92234204473885,
            "unit": "iter/sec",
            "range": "stddev: 0.004258402717260293",
            "extra": "mean: 6.175800000000629 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.11541240282355,
            "unit": "iter/sec",
            "range": "stddev: 0.010851865716390933",
            "extra": "mean: 4.481985306306633 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2591358.931241204,
            "unit": "iter/sec",
            "range": "stddev: 1.4725138188578016e-8",
            "extra": "mean: 385.89791168796 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.37773870768665,
            "unit": "iter/sec",
            "range": "stddev: 0.0008165818485167002",
            "extra": "mean: 10.062615762886665 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4627477.0876597855,
            "unit": "iter/sec",
            "range": "stddev: 1.0396482046966265e-8",
            "extra": "mean: 216.10047571412917 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 112.72976660415539,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008006508764461",
            "extra": "mean: 8.870771492958442 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140199.50585619351,
            "unit": "iter/sec",
            "range": "stddev: 3.09504848115776e-7",
            "extra": "mean: 7.132692757317757 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.2947968485855,
            "unit": "iter/sec",
            "range": "stddev: 0.000023202316480838514",
            "extra": "mean: 1.343553662116267 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.46908910170913,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487284913551586",
            "extra": "mean: 4.338976666665639 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.77415356640248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867808364914906",
            "extra": "mean: 10.441230360826696 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2356.828296104729,
            "unit": "iter/sec",
            "range": "stddev: 0.00008696113799488105",
            "extra": "mean: 424.29904700854104 usec\nrounds: 1404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.33234363134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503974795777661",
            "extra": "mean: 11.583144369047156 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.97146689426614,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570918873134231",
            "extra": "mean: 3.597491538152643 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.20319654340966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000474940399573933",
            "extra": "mean: 10.080320340911765 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.0588513198128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004463139326090167",
            "extra": "mean: 21.711353439025892 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.650228287234511,
            "unit": "iter/sec",
            "range": "stddev: 0.001616451098180681",
            "extra": "mean: 605.976765600002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11843.56935827275,
            "unit": "iter/sec",
            "range": "stddev: 0.000012281801758819832",
            "extra": "mean: 84.4340054716274 usec\nrounds: 4569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.12714582917928,
            "unit": "iter/sec",
            "range": "stddev: 0.00005439423309874629",
            "extra": "mean: 5.232119151163144 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.09620421515913,
            "unit": "iter/sec",
            "range": "stddev: 0.017129460245832624",
            "extra": "mean: 12.331033365592125 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.615562269330546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537514852179411",
            "extra": "mean: 21.45206345945811 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.6214861162143,
            "unit": "iter/sec",
            "range": "stddev: 0.00006522477731466662",
            "extra": "mean: 1.477931192726332 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.70084485702013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007070128495832164",
            "extra": "mean: 9.643122979169286 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 400.7330147436884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003209195042333329",
            "extra": "mean: 2.495427037973417 msec\nrounds: 316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.3031400918347,
            "unit": "iter/sec",
            "range": "stddev: 0.0007246980188786238",
            "extra": "mean: 9.871362319997843 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7862740819150951,
            "unit": "iter/sec",
            "range": "stddev: 0.003350529832690376",
            "extra": "mean: 1.2718211410000209 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.55955438891792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031643192373466",
            "extra": "mean: 9.94435592000002 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8093.621158835361,
            "unit": "iter/sec",
            "range": "stddev: 0.000015023577674602277",
            "extra": "mean: 123.55409036020362 usec\nrounds: 4471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2372.7222307137113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008089709906179975",
            "extra": "mean: 421.45683428742586 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1084344.39539889,
            "unit": "iter/sec",
            "range": "stddev: 1.374682668152412e-7",
            "extra": "mean: 922.2162296805501 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.84630365609128,
            "unit": "iter/sec",
            "range": "stddev: 0.0006340097525745689",
            "extra": "mean: 9.916079853657564 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.13029287372063,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481439520419841",
            "extra": "mean: 5.843500780647373 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 432.09723266984196,
            "unit": "iter/sec",
            "range": "stddev: 0.000036722839501087365",
            "extra": "mean: 2.3142939236643594 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2376.196081038417,
            "unit": "iter/sec",
            "range": "stddev: 0.00007867966635244701",
            "extra": "mean: 420.84069070722137 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9447.193681771083,
            "unit": "iter/sec",
            "range": "stddev: 0.000002517300413318696",
            "extra": "mean: 105.85154001124789 usec\nrounds: 5061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8848675898004515,
            "unit": "iter/sec",
            "range": "stddev: 0.009262306447836974",
            "extra": "mean: 1.1301125857999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.45356185520518,
            "unit": "iter/sec",
            "range": "stddev: 0.00016838766662124663",
            "extra": "mean: 18.033106739132474 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2386.242490701775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007906028716318295",
            "extra": "mean: 419.068893415735 usec\nrounds: 1473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.01649129162129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420322534172296",
            "extra": "mean: 10.414877554344283 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.886358466818635,
            "unit": "iter/sec",
            "range": "stddev: 0.00016015639300052148",
            "extra": "mean: 33.460081833330456 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.77898647111024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420241197762658",
            "extra": "mean: 9.729615306929361 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17576241391628264,
            "unit": "iter/sec",
            "range": "stddev: 0.07417470228927274",
            "extra": "mean: 5.689498554999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.45290822285094,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275536859069228",
            "extra": "mean: 9.30640237234026 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13570.446371940343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014604135458289218",
            "extra": "mean: 73.68954362972933 usec\nrounds: 7174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.54273583359824,
            "unit": "iter/sec",
            "range": "stddev: 0.00007553194724017988",
            "extra": "mean: 9.046275112145914 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2538507.458172696,
            "unit": "iter/sec",
            "range": "stddev: 1.6652525700603494e-8",
            "extra": "mean: 393.93226786876244 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.20997169770342,
            "unit": "iter/sec",
            "range": "stddev: 0.000058377626947175714",
            "extra": "mean: 6.484664960319764 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2373.608825894962,
            "unit": "iter/sec",
            "range": "stddev: 0.00007846488121222179",
            "extra": "mean: 421.2994108761594 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2580674.337350422,
            "unit": "iter/sec",
            "range": "stddev: 1.6287243101346735e-8",
            "extra": "mean: 387.4956190816106 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2389.6206270485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009541423425050845",
            "extra": "mean: 418.47646805557304 usec\nrounds: 1440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "81f94d7e7e6bd6c2d677e516d1743fc3bce14253",
          "message": "chore(deps): update cpcloud/compare-commits-action action to v5.0.30",
          "timestamp": "2023-05-20T04:24:13-05:00",
          "tree_id": "68c7b6f01325558f22dbfd89c9ba391df1cd55ed",
          "url": "https://github.com/ibis-project/ibis/commit/81f94d7e7e6bd6c2d677e516d1743fc3bce14253"
        },
        "date": 1684575125866,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 187.5913251518293,
            "unit": "iter/sec",
            "range": "stddev: 0.004530659343341648",
            "extra": "mean: 5.3307369047616575 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 201.26671049887435,
            "unit": "iter/sec",
            "range": "stddev: 0.006527533751910924",
            "extra": "mean: 4.968531544642068 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 233.55056714189936,
            "unit": "iter/sec",
            "range": "stddev: 0.0006048131203142686",
            "extra": "mean: 4.281727988236592 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1778671.1144564506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012005990144224899",
            "extra": "mean: 562.2174846560057 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 88.9768178454628,
            "unit": "iter/sec",
            "range": "stddev: 0.001482864847055109",
            "extra": "mean: 11.238882488884075 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3964194.269282559,
            "unit": "iter/sec",
            "range": "stddev: 6.344550941990955e-7",
            "extra": "mean: 252.25807114119567 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.68735428309185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006493755310944627",
            "extra": "mean: 9.200702387099755 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1957314946367976,
            "unit": "iter/sec",
            "range": "stddev: 0.007292901730174397",
            "extra": "mean: 455.4290916000241 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.7964832716786,
            "unit": "iter/sec",
            "range": "stddev: 0.00027121121059727734",
            "extra": "mean: 6.8588760000238835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1761628.580630272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031935457534762268",
            "extra": "mean: 567.6565486024426 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5337078.882334174,
            "unit": "iter/sec",
            "range": "stddev: 8.558976833377031e-7",
            "extra": "mean: 187.3684129553452 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.86984489833492,
            "unit": "iter/sec",
            "range": "stddev: 0.000872990687108245",
            "extra": "mean: 11.923236548394442 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.05127736778564,
            "unit": "iter/sec",
            "range": "stddev: 0.000983009148412423",
            "extra": "mean: 11.22948518604575 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.6746186584304,
            "unit": "iter/sec",
            "range": "stddev: 0.0009608681808181394",
            "extra": "mean: 11.537402938463751 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.26521777918195,
            "unit": "iter/sec",
            "range": "stddev: 0.001031395964523252",
            "extra": "mean: 11.202571672134715 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.45687343273395,
            "unit": "iter/sec",
            "range": "stddev: 0.0034189571494377957",
            "extra": "mean: 60.76488368750077 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9708.065547798005,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090124095304111",
            "extra": "mean: 103.0071330973678 usec\nrounds: 4538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 232.3792220385444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006025163524909266",
            "extra": "mean: 4.303310731602894 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5571244040110468,
            "unit": "iter/sec",
            "range": "stddev: 0.11130382861577187",
            "extra": "mean: 1.7949312447999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 238.4389439806103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434004298765134",
            "extra": "mean: 4.193945767857953 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.409601911794518,
            "unit": "iter/sec",
            "range": "stddev: 0.0015752907280527132",
            "extra": "mean: 37.86501603999568 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8489.479578995371,
            "unit": "iter/sec",
            "range": "stddev: 0.000036767074420090515",
            "extra": "mean: 117.79285063294044 usec\nrounds: 5925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.38980600007919,
            "unit": "iter/sec",
            "range": "stddev: 0.0007550573652120318",
            "extra": "mean: 10.374541058825022 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1761.4788336870395,
            "unit": "iter/sec",
            "range": "stddev: 0.00012941023525665722",
            "extra": "mean: 567.7048062546685 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.052312474386245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015308443165717703",
            "extra": "mean: 43.379595913039715 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.53418470204201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510787887459442",
            "extra": "mean: 10.14876210752547 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1765.705822280147,
            "unit": "iter/sec",
            "range": "stddev: 0.00015104316592403142",
            "extra": "mean: 566.3457566836635 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1017.665485547027,
            "unit": "iter/sec",
            "range": "stddev: 0.00007490926616780306",
            "extra": "mean: 982.6411666722379 usec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 182.8067259846341,
            "unit": "iter/sec",
            "range": "stddev: 0.0008041397255938515",
            "extra": "mean: 5.470258244677799 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.739188934879185,
            "unit": "iter/sec",
            "range": "stddev: 0.002586457091510368",
            "extra": "mean: 129.21250642857072 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6988.8727725308445,
            "unit": "iter/sec",
            "range": "stddev: 0.000054801571114475705",
            "extra": "mean: 143.08459068398165 usec\nrounds: 3027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1784.7775552100961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002429931916191829",
            "extra": "mean: 560.293912863715 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.39260474921775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007549927161177276",
            "extra": "mean: 9.862652236554906 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 671.8229976776789,
            "unit": "iter/sec",
            "range": "stddev: 0.00023341635121914973",
            "extra": "mean: 1.4884873001620151 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.23389791969389,
            "unit": "iter/sec",
            "range": "stddev: 0.0014207649251608092",
            "extra": "mean: 11.463433640447706 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1832.0026771226928,
            "unit": "iter/sec",
            "range": "stddev: 0.00016758036726535262",
            "extra": "mean: 545.850730726322 usec\nrounds: 1790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.30429866747408,
            "unit": "iter/sec",
            "range": "stddev: 0.0012211481577112256",
            "extra": "mean: 19.879016833338408 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.55027511267759,
            "unit": "iter/sec",
            "range": "stddev: 0.0015524580797305946",
            "extra": "mean: 24.067229333335643 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.88112681002329,
            "unit": "iter/sec",
            "range": "stddev: 0.0009573872930608913",
            "extra": "mean: 16.699752547619287 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.24188850910714,
            "unit": "iter/sec",
            "range": "stddev: 0.0012231746282386677",
            "extra": "mean: 11.08132837777526 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.52944846053269,
            "unit": "iter/sec",
            "range": "stddev: 0.0016860564134885427",
            "extra": "mean: 32.755259279995244 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1489.2504023019144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021321947956213",
            "extra": "mean: 671.4787509570676 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1690130.9910854588,
            "unit": "iter/sec",
            "range": "stddev: 0.00000817505607104277",
            "extra": "mean: 591.6701162658205 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 120.33330004963938,
            "unit": "iter/sec",
            "range": "stddev: 0.018712462578274493",
            "extra": "mean: 8.310251606059872 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6345180.714866305,
            "unit": "iter/sec",
            "range": "stddev: 6.254362366916702e-8",
            "extra": "mean: 157.5999242476045 nsec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1831.1793187245494,
            "unit": "iter/sec",
            "range": "stddev: 0.00011990199995932043",
            "extra": "mean: 546.0961631526718 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.47137207346329,
            "unit": "iter/sec",
            "range": "stddev: 0.0016503282126861688",
            "extra": "mean: 11.699823879514797 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.359712457583434,
            "unit": "iter/sec",
            "range": "stddev: 0.0019281865753672561",
            "extra": "mean: 27.502967774197376 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.335374483652,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387299835608714",
            "extra": "mean: 3.6187911224487834 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 994245.9198025533,
            "unit": "iter/sec",
            "range": "stddev: 0.000005129046275842931",
            "extra": "mean: 1.0057873812533116 usec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10527875.422438985,
            "unit": "iter/sec",
            "range": "stddev: 3.0239562970921347e-7",
            "extra": "mean: 94.9859263977642 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.4668404735051,
            "unit": "iter/sec",
            "range": "stddev: 0.001121165410148619",
            "extra": "mean: 11.177325528737567 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 586.7994836440625,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897475454070681",
            "extra": "mean: 1.7041596454549273 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.77001570124442,
            "unit": "iter/sec",
            "range": "stddev: 0.0011366886621910386",
            "extra": "mean: 11.393412568180977 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.60550510670846,
            "unit": "iter/sec",
            "range": "stddev: 0.0015104154187989848",
            "extra": "mean: 13.965406689189232 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.6715196941571,
            "unit": "iter/sec",
            "range": "stddev: 0.0012680791815796162",
            "extra": "mean: 11.15181278750157 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.63798118809498,
            "unit": "iter/sec",
            "range": "stddev: 0.00143073877851533",
            "extra": "mean: 26.56890641935661 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.2568837564213,
            "unit": "iter/sec",
            "range": "stddev: 0.001394164805903991",
            "extra": "mean: 11.330560942530933 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 190.54964203183422,
            "unit": "iter/sec",
            "range": "stddev: 0.010780260629036564",
            "extra": "mean: 5.2479762718889535 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6799221479186576,
            "unit": "iter/sec",
            "range": "stddev: 0.011525408012968698",
            "extra": "mean: 1.4707566197999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.76340184280579,
            "unit": "iter/sec",
            "range": "stddev: 0.001689553470628482",
            "extra": "mean: 11.525596954021664 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.06234005973536,
            "unit": "iter/sec",
            "range": "stddev: 0.0014197225474365",
            "extra": "mean: 11.895933414289823 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11469578671132079,
            "unit": "iter/sec",
            "range": "stddev: 0.14099572318330797",
            "extra": "mean: 8.718716080800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.39434881355561,
            "unit": "iter/sec",
            "range": "stddev: 0.001141698060507962",
            "extra": "mean: 12.136754697374087 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 222.16977985879325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632670051520091",
            "extra": "mean: 4.501062208530702 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1778.8697794062848,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308837487227688",
            "extra": "mean: 562.1546959630513 usec\nrounds: 1684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1826.6939294333883,
            "unit": "iter/sec",
            "range": "stddev: 0.00019910705242619567",
            "extra": "mean: 547.4370850458698 usec\nrounds: 1752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.43885756875673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005693582447645277",
            "extra": "mean: 6.923344706766137 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11836.313274407989,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285554577621123",
            "extra": "mean: 84.48576654034332 usec\nrounds: 6605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3449.816068756039,
            "unit": "iter/sec",
            "range": "stddev: 0.00029050047300667334",
            "extra": "mean: 289.8705264482659 usec\nrounds: 1966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617027.5096973008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018746036177726693",
            "extra": "mean: 618.4186688247468 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1528661738781325,
            "unit": "iter/sec",
            "range": "stddev: 0.0194891778299425",
            "extra": "mean: 867.4033661999943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 208.1397669447992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006142879671991448",
            "extra": "mean: 4.804463917100524 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 87.8264041295131,
            "unit": "iter/sec",
            "range": "stddev: 0.0012393922191403495",
            "extra": "mean: 11.386097494386213 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5160389.095413907,
            "unit": "iter/sec",
            "range": "stddev: 1.1344391725998781e-7",
            "extra": "mean: 193.78383713132507 nsec\nrounds: 26525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1910797639075559,
            "unit": "iter/sec",
            "range": "stddev: 0.006255172281236748",
            "extra": "mean: 839.5743344000039 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.893863025611,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258338453309546",
            "extra": "mean: 6.138966695404448 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.976090443670785,
            "unit": "iter/sec",
            "range": "stddev: 0.0016390756957827648",
            "extra": "mean: 20.843715916662912 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1789.8452726369026,
            "unit": "iter/sec",
            "range": "stddev: 0.00017507351555854752",
            "extra": "mean: 558.70751248053 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 447.77990668664523,
            "unit": "iter/sec",
            "range": "stddev: 0.00039305883828598506",
            "extra": "mean: 2.233240002660049 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6775588390378232,
            "unit": "iter/sec",
            "range": "stddev: 0.005403331041472072",
            "extra": "mean: 1.4758865833999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.02548286717006,
            "unit": "iter/sec",
            "range": "stddev: 0.0014241526453984963",
            "extra": "mean: 12.191333291135564 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.05523252268519,
            "unit": "iter/sec",
            "range": "stddev: 0.0013922728697859845",
            "extra": "mean: 11.356508538460512 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.45934094488157,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479675614863122",
            "extra": "mean: 11.566130265063052 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 144.04220515455157,
            "unit": "iter/sec",
            "range": "stddev: 0.004163781491690468",
            "extra": "mean: 6.942409684210539 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 225.30426919129917,
            "unit": "iter/sec",
            "range": "stddev: 0.000666719626101253",
            "extra": "mean: 4.438442305551386 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4961940.500839697,
            "unit": "iter/sec",
            "range": "stddev: 4.725245770481077e-7",
            "extra": "mean: 201.53405705509982 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.78861683613984,
            "unit": "iter/sec",
            "range": "stddev: 0.0013635343165832549",
            "extra": "mean: 11.262705013701346 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.99021757390724,
            "unit": "iter/sec",
            "range": "stddev: 0.00079830277040385",
            "extra": "mean: 6.622945619046587 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 341.5571976095331,
            "unit": "iter/sec",
            "range": "stddev: 0.00045350109554676574",
            "extra": "mean: 2.9277673168615124 msec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1785.1558310860137,
            "unit": "iter/sec",
            "range": "stddev: 0.000187867616582842",
            "extra": "mean: 560.1751861581978 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139932.93489552,
            "unit": "iter/sec",
            "range": "stddev: 0.000005283443055674389",
            "extra": "mean: 7.146280471760585 usec\nrounds: 39840"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "69899cabd3aa2f52c58a2a469aa7e6cec4e1a585",
          "message": "test(bigquery): xfail using correct error for interval operation",
          "timestamp": "2023-05-20T05:45:28-04:00",
          "tree_id": "c534cb01386f941023179f5ef3ab796610fae45b",
          "url": "https://github.com/ibis-project/ibis/commit/69899cabd3aa2f52c58a2a469aa7e6cec4e1a585"
        },
        "date": 1684576153436,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.8323670627852,
            "unit": "iter/sec",
            "range": "stddev: 0.010137815737619326",
            "extra": "mean: 11.25715809523816 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 276.73796562077786,
            "unit": "iter/sec",
            "range": "stddev: 0.00029356550473515154",
            "extra": "mean: 3.613526599997954 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.33573361406684,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740188313463689",
            "extra": "mean: 9.493454554214612 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8140.223884096899,
            "unit": "iter/sec",
            "range": "stddev: 0.00006175908049694817",
            "extra": "mean: 122.84674405008 usec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.147828102002876,
            "unit": "iter/sec",
            "range": "stddev: 0.014976258038243742",
            "extra": "mean: 23.176137571419986 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.78196893206449,
            "unit": "iter/sec",
            "range": "stddev: 0.00026498336715347884",
            "extra": "mean: 10.123305000001892 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.4613043301001,
            "unit": "iter/sec",
            "range": "stddev: 0.00030720423468402975",
            "extra": "mean: 3.8393419036734637 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 238.92206327235164,
            "unit": "iter/sec",
            "range": "stddev: 0.00025033143569408906",
            "extra": "mean: 4.185465278106534 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.6873301489988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002168260777612371",
            "extra": "mean: 5.0078289857140135 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.3735796284144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002594607515296041",
            "extra": "mean: 1.8678545935981148 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.06442601794531,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444760634838402",
            "extra": "mean: 10.30243561956591 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.9192258539624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400478799986743",
            "extra": "mean: 9.811691480397192 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.55518251195434,
            "unit": "iter/sec",
            "range": "stddev: 0.00010464021355916719",
            "extra": "mean: 6.189835475726721 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2074.351284214895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013151166370731917",
            "extra": "mean: 482.0784250043175 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2125.6166026280503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008010200919046822",
            "extra": "mean: 470.45172622552406 usec\nrounds: 1735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.20641797241858,
            "unit": "iter/sec",
            "range": "stddev: 0.00017481264777234582",
            "extra": "mean: 9.415626843376796 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.936717566854746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009026949957041166",
            "extra": "mean: 52.8074623529432 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.638986834255554,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712488321621314",
            "extra": "mean: 17.34936810869978 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.63737401014356,
            "unit": "iter/sec",
            "range": "stddev: 0.00008589085821073798",
            "extra": "mean: 6.073954993587231 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1753744.0789183886,
            "unit": "iter/sec",
            "range": "stddev: 8.176605318994708e-8",
            "extra": "mean: 570.2086250901237 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.78640655214866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006419946990825972",
            "extra": "mean: 9.364487787232118 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.49792587499024,
            "unit": "iter/sec",
            "range": "stddev: 0.0007561518773755479",
            "extra": "mean: 9.95045411428594 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2706335.883190634,
            "unit": "iter/sec",
            "range": "stddev: 1.5957941475593728e-8",
            "extra": "mean: 369.5032853133224 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.754510724794,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520105521123691",
            "extra": "mean: 3.487303468993124 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.3957842187569,
            "unit": "iter/sec",
            "range": "stddev: 0.000713877491029819",
            "extra": "mean: 10.16303704411528 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.95284358613307,
            "unit": "iter/sec",
            "range": "stddev: 0.017967418787616908",
            "extra": "mean: 11.5004864563104 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.13679841873908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007881753034117919",
            "extra": "mean: 10.401844210001059 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12629.539544728721,
            "unit": "iter/sec",
            "range": "stddev: 0.000011113798537669493",
            "extra": "mean: 79.17945040342956 usec\nrounds: 3972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.25839574227157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004865792416282581",
            "extra": "mean: 5.673488606251809 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.75574620718798,
            "unit": "iter/sec",
            "range": "stddev: 0.017972250408399882",
            "extra": "mean: 11.798610061853148 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148387.25012797318,
            "unit": "iter/sec",
            "range": "stddev: 2.9173558848203727e-7",
            "extra": "mean: 6.739123470093103 usec\nrounds: 33004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.01787649406963,
            "unit": "iter/sec",
            "range": "stddev: 0.0008277826138367234",
            "extra": "mean: 9.99821267010496 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.41794676488115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072587491528382",
            "extra": "mean: 9.396911239129533 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.66630308620785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798801510995447",
            "extra": "mean: 9.933810712643611 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.1259167147222,
            "unit": "iter/sec",
            "range": "stddev: 0.00011327629789592645",
            "extra": "mean: 1.3603111756268915 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.69536574543176,
            "unit": "iter/sec",
            "range": "stddev: 0.00008053160398848117",
            "extra": "mean: 9.643632507695306 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.07069593516457,
            "unit": "iter/sec",
            "range": "stddev: 0.00024643223345756593",
            "extra": "mean: 3.4956394143447715 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11655875.504257556,
            "unit": "iter/sec",
            "range": "stddev: 4.047061812349145e-9",
            "extra": "mean: 85.79364112413698 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5574370.529475189,
            "unit": "iter/sec",
            "range": "stddev: 1.0705131133922236e-8",
            "extra": "mean: 179.39245242360548 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4456.927222587898,
            "unit": "iter/sec",
            "range": "stddev: 0.000028840831571188728",
            "extra": "mean: 224.36982926980664 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.6553080396682,
            "unit": "iter/sec",
            "range": "stddev: 0.000012932382430318291",
            "extra": "mean: 860.1001458343502 usec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.3101228907641,
            "unit": "iter/sec",
            "range": "stddev: 0.000020711949800067205",
            "extra": "mean: 1.4613257447890031 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.66425633914645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278629105902031",
            "extra": "mean: 3.5629759665285956 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.98550558415933,
            "unit": "iter/sec",
            "range": "stddev: 0.000746633052448752",
            "extra": "mean: 10.41823964893541 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.4843930648105,
            "unit": "iter/sec",
            "range": "stddev: 0.000007279905286155516",
            "extra": "mean: 575.8761806289826 usec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.413078650752524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007966055563403861",
            "extra": "mean: 23.577632933332403 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5907850115581932,
            "unit": "iter/sec",
            "range": "stddev: 0.001303073924142096",
            "extra": "mean: 628.6204564000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9174730572086544,
            "unit": "iter/sec",
            "range": "stddev: 0.009202112742965987",
            "extra": "mean: 1.0899502630000142 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16898301592948878,
            "unit": "iter/sec",
            "range": "stddev: 0.08091790800445246",
            "extra": "mean: 5.917754482600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13940.550390756878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015808442294071717",
            "extra": "mean: 71.73317924829126 usec\nrounds: 2795"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.98422548230084,
            "unit": "iter/sec",
            "range": "stddev: 0.000569860625184064",
            "extra": "mean: 11.630040212502024 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2700844.0005786284,
            "unit": "iter/sec",
            "range": "stddev: 1.6868656127009126e-8",
            "extra": "mean: 370.2546314356345 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.68020447463464,
            "unit": "iter/sec",
            "range": "stddev: 0.00031339006182452606",
            "extra": "mean: 7.956702522725643 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.94906069950687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652056171418514",
            "extra": "mean: 9.52843211110987 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.48781548900261,
            "unit": "iter/sec",
            "range": "stddev: 0.00016956895223833458",
            "extra": "mean: 8.969590045457856 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1984.9817269603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009206718016456228",
            "extra": "mean: 503.7829751366775 usec\nrounds: 1287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.063629075116985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686033967614294",
            "extra": "mean: 38.36764239998729 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155634.061948972,
            "unit": "iter/sec",
            "range": "stddev: 6.393363194234688e-9",
            "extra": "mean: 162.45280176418967 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.9480876124793,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541720989771481",
            "extra": "mean: 3.1550908148171666 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1032557.0714982166,
            "unit": "iter/sec",
            "range": "stddev: 1.1187529054933928e-7",
            "extra": "mean: 968.4694702143901 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.03356827630537,
            "unit": "iter/sec",
            "range": "stddev: 0.000045194811314099874",
            "extra": "mean: 5.2074228947366175 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6039426.58846179,
            "unit": "iter/sec",
            "range": "stddev: 8.092317914483656e-9",
            "extra": "mean: 165.57863322811653 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4532925.682895916,
            "unit": "iter/sec",
            "range": "stddev: 1.243859245159972e-8",
            "extra": "mean: 220.60807301019076 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.5987752974296,
            "unit": "iter/sec",
            "range": "stddev: 0.0038455577070651303",
            "extra": "mean: 6.150107823203316 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1936920.7766491056,
            "unit": "iter/sec",
            "range": "stddev: 8.260233891267109e-8",
            "extra": "mean: 516.2833772323983 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.56269582159354,
            "unit": "iter/sec",
            "range": "stddev: 0.00025501708812211373",
            "extra": "mean: 3.501857961954366 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7677696315696712,
            "unit": "iter/sec",
            "range": "stddev: 0.0031124027552457533",
            "extra": "mean: 1.30247402199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.4299216410115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197777099526602",
            "extra": "mean: 27.44996296874369 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2105.7197705410135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008637448338544415",
            "extra": "mean: 474.8969991116502 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.06206122685683,
            "unit": "iter/sec",
            "range": "stddev: 0.004076741157652477",
            "extra": "mean: 4.365629099135832 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2107.097868836316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008654853607516436",
            "extra": "mean: 474.5864037878167 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2123.901700045913,
            "unit": "iter/sec",
            "range": "stddev: 0.00008736257340346808",
            "extra": "mean: 470.8315832029245 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2185.856128234353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008282315351797758",
            "extra": "mean: 457.4866511492501 usec\nrounds: 1697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9848.64045950833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031247243189741872",
            "extra": "mean: 101.53685720495098 usec\nrounds: 4622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9216928927506419,
            "unit": "iter/sec",
            "range": "stddev: 0.005473130032377034",
            "extra": "mean: 1.0849600858000144 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.73706920497388,
            "unit": "iter/sec",
            "range": "stddev: 0.025130357722573472",
            "extra": "mean: 12.385884326085918 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5042060268797406,
            "unit": "iter/sec",
            "range": "stddev: 0.0029027075909578083",
            "extra": "mean: 399.3281659999866 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.39529066879248,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601724457087246",
            "extra": "mean: 9.862390978950867 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.39244698582733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361925298213249",
            "extra": "mean: 9.862667582524962 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7110920.947726579,
            "unit": "iter/sec",
            "range": "stddev: 3.511267738193498e-9",
            "extra": "mean: 140.62876065574366 nsec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.629056095368579,
            "unit": "iter/sec",
            "range": "stddev: 0.00030257718330283445",
            "extra": "mean: 115.88753033332624 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2144.423473985335,
            "unit": "iter/sec",
            "range": "stddev: 0.00008148357385216223",
            "extra": "mean: 466.3258037096262 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.284838423071638,
            "unit": "iter/sec",
            "range": "stddev: 0.09120568904233753",
            "extra": "mean: 778.3079818000147 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2177.2835396716637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008145591211776904",
            "extra": "mean: 459.28790705449455 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.1242609035041,
            "unit": "iter/sec",
            "range": "stddev: 0.00023817301276080643",
            "extra": "mean: 3.5826337587534516 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.92057981917266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766326191543209",
            "extra": "mean: 18.545794636363087 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 420.6055097686473,
            "unit": "iter/sec",
            "range": "stddev: 0.00005120935527376313",
            "extra": "mean: 2.377524727505464 msec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.67623047608354,
            "unit": "iter/sec",
            "range": "stddev: 0.03930393789437903",
            "extra": "mean: 28.02986713157308 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.96316414979682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480248532890984",
            "extra": "mean: 9.093954395835269 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.1358128758767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446845898705334",
            "extra": "mean: 3.701841637930047 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.34978622953338,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614020609389213",
            "extra": "mean: 14.847857075476398 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.04437322583564,
            "unit": "iter/sec",
            "range": "stddev: 0.0001152824960890424",
            "extra": "mean: 33.28410256666909 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e04c38c9c5cfe95c4015efde3d14f2d786665970",
          "message": "feat(api): raise better error on column name collision in joins",
          "timestamp": "2023-05-20T05:08:35-05:00",
          "tree_id": "5e9e3a424142ce830df97d0895d44a23c859b980",
          "url": "https://github.com/ibis-project/ibis/commit/e04c38c9c5cfe95c4015efde3d14f2d786665970"
        },
        "date": 1684578205075,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.776716550925556,
            "unit": "iter/sec",
            "range": "stddev: 0.00016622263513155252",
            "extra": "mean: 18.59540827586635 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1942621.6470584688,
            "unit": "iter/sec",
            "range": "stddev: 7.92651511138011e-8",
            "extra": "mean: 514.7682779681812 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2087.1585354893414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011761178719545418",
            "extra": "mean: 479.1202886586412 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2218.6987570436463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007896417833347829",
            "extra": "mean: 450.7146347945279 usec\nrounds: 753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.508386298196,
            "unit": "iter/sec",
            "range": "stddev: 0.00015331800160824189",
            "extra": "mean: 6.472140599993281 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3542490570915067,
            "unit": "iter/sec",
            "range": "stddev: 0.00030458793156260656",
            "extra": "mean: 738.416611599996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1752125.8463742454,
            "unit": "iter/sec",
            "range": "stddev: 9.282127289392461e-8",
            "extra": "mean: 570.7352597242635 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.801229177218472,
            "unit": "iter/sec",
            "range": "stddev: 0.003015905104036991",
            "extra": "mean: 1.2480823569999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1139.6282838403868,
            "unit": "iter/sec",
            "range": "stddev: 0.00004370458622503945",
            "extra": "mean: 877.4790992639644 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2727386.1636565835,
            "unit": "iter/sec",
            "range": "stddev: 4.426375778145572e-8",
            "extra": "mean: 366.6514164090559 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.12680722759387,
            "unit": "iter/sec",
            "range": "stddev: 0.00015844761733286493",
            "extra": "mean: 10.512283857141012 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2148.6844152895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00009868292714979914",
            "extra": "mean: 465.4010579144173 usec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1892190.908662342,
            "unit": "iter/sec",
            "range": "stddev: 4.1597683566245214e-7",
            "extra": "mean: 528.4879001490057 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.60498485423919,
            "unit": "iter/sec",
            "range": "stddev: 0.00010862939224282667",
            "extra": "mean: 9.04118382474217 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2197.547578325284,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008901285788515",
            "extra": "mean: 455.05271870476815 usec\nrounds: 1390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.27500694169869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724211663718822",
            "extra": "mean: 7.857002124997514 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.9590119645927,
            "unit": "iter/sec",
            "range": "stddev: 0.00023210263357740303",
            "extra": "mean: 3.571951454545329 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.5527398932852,
            "unit": "iter/sec",
            "range": "stddev: 0.00006482385642951942",
            "extra": "mean: 1.8637496850708277 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12412.955247516571,
            "unit": "iter/sec",
            "range": "stddev: 0.000020584826156732375",
            "extra": "mean: 80.56099293518903 usec\nrounds: 4671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.924187904406118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148500251255043",
            "extra": "mean: 52.84242605555455 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8553.46389113366,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676116534117927",
            "extra": "mean: 116.91169948546562 usec\nrounds: 4276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.8351947625772,
            "unit": "iter/sec",
            "range": "stddev: 0.00033953073061524197",
            "extra": "mean: 3.6652162887937014 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5411660307846056,
            "unit": "iter/sec",
            "range": "stddev: 0.0022075900561529605",
            "extra": "mean: 393.52013519999787 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.75751075384447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008206856679790725",
            "extra": "mean: 10.125812126760916 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.7117556635501,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116891822225664",
            "extra": "mean: 10.028907758622012 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.4726690278889,
            "unit": "iter/sec",
            "range": "stddev: 0.00016463175782542325",
            "extra": "mean: 9.1347000934566 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.53657714385045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009774692822434475",
            "extra": "mean: 5.762473920244869 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 415.85974719804034,
            "unit": "iter/sec",
            "range": "stddev: 0.000032551348996969786",
            "extra": "mean: 2.4046568746740977 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 235.2951070729012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718698647863942",
            "extra": "mean: 4.249982128570872 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148394.60975810513,
            "unit": "iter/sec",
            "range": "stddev: 4.617163593186452e-7",
            "extra": "mean: 6.738789243289083 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.6928121452274,
            "unit": "iter/sec",
            "range": "stddev: 0.014513807309505465",
            "extra": "mean: 10.9059802682914 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5590945.733443519,
            "unit": "iter/sec",
            "range": "stddev: 8.272446116421978e-9",
            "extra": "mean: 178.86061637443478 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4509770.63050883,
            "unit": "iter/sec",
            "range": "stddev: 1.1206747426507557e-8",
            "extra": "mean: 221.74076730955116 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.119736492299,
            "unit": "iter/sec",
            "range": "stddev: 0.0009526699755192701",
            "extra": "mean: 9.792426364862502 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2092.985552307698,
            "unit": "iter/sec",
            "range": "stddev: 0.00008845066917238227",
            "extra": "mean: 477.78638457270443 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.73105713654914,
            "unit": "iter/sec",
            "range": "stddev: 0.0006850114714114047",
            "extra": "mean: 9.829839855667123 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.82470550685115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007328605939444402",
            "extra": "mean: 9.631618940002795 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6173925.805227196,
            "unit": "iter/sec",
            "range": "stddev: 7.3756325510826864e-9",
            "extra": "mean: 161.97149618351 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.533376902860022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009384448376971097",
            "extra": "mean: 117.18690166665941 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.56087663626349,
            "unit": "iter/sec",
            "range": "stddev: 0.000579117755348546",
            "extra": "mean: 9.75030667441097 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.3186271654292,
            "unit": "iter/sec",
            "range": "stddev: 0.00001226961147205659",
            "extra": "mean: 1.3309932215747058 msec\nrounds: 686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.31936006980436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751762084498391",
            "extra": "mean: 11.720669250001947 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.9888358824997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523850706050453",
            "extra": "mean: 3.508909382023294 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.7044176427822,
            "unit": "iter/sec",
            "range": "stddev: 0.00006060318107239579",
            "extra": "mean: 6.1841229483852365 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.496491001777294,
            "unit": "iter/sec",
            "range": "stddev: 0.00036123423660326296",
            "extra": "mean: 20.620048571418334 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.02607377583635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951061961567497",
            "extra": "mean: 9.997393302080937 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.66434744186223,
            "unit": "iter/sec",
            "range": "stddev: 0.018579706937097172",
            "extra": "mean: 12.55266668354729 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.16414011929357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006021415841273963",
            "extra": "mean: 27.65170129032046 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.38091586386912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063623150968181",
            "extra": "mean: 10.164572988766563 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2108.9254679824494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009158433979627386",
            "extra": "mean: 474.1751262346281 usec\nrounds: 1418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.55391247661424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009569911246029271",
            "extra": "mean: 10.689023831579155 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.33055883887029,
            "unit": "iter/sec",
            "range": "stddev: 0.00013728915538807284",
            "extra": "mean: 9.584919424656924 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.34574156340267,
            "unit": "iter/sec",
            "range": "stddev: 0.000627176961185704",
            "extra": "mean: 9.492552666669937 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.96372178597102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006168413354063495",
            "extra": "mean: 15.159848063828887 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.47154720258551,
            "unit": "iter/sec",
            "range": "stddev: 0.000784236362717686",
            "extra": "mean: 9.571984207918877 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7079129.434758475,
            "unit": "iter/sec",
            "range": "stddev: 4.83653522948757e-9",
            "extra": "mean: 141.26030738892874 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048401.106669293,
            "unit": "iter/sec",
            "range": "stddev: 1.3941465783845878e-7",
            "extra": "mean: 953.8334074989101 nsec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9628057260615159,
            "unit": "iter/sec",
            "range": "stddev: 0.00318800294481677",
            "extra": "mean: 1.0386311308000131 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.2854093445453,
            "unit": "iter/sec",
            "range": "stddev: 0.000006568394129699663",
            "extra": "mean: 569.3835379371541 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.5266021579183,
            "unit": "iter/sec",
            "range": "stddev: 0.00026856282292704256",
            "extra": "mean: 3.6032581821867278 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.80568919448741,
            "unit": "iter/sec",
            "range": "stddev: 0.00048482521632323855",
            "extra": "mean: 33.5506417407369 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.5840125657471,
            "unit": "iter/sec",
            "range": "stddev: 0.000022660757953166403",
            "extra": "mean: 3.1587192034604823 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.09911424137135,
            "unit": "iter/sec",
            "range": "stddev: 0.0035297331317197876",
            "extra": "mean: 4.403363717822141 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.52329167210812,
            "unit": "iter/sec",
            "range": "stddev: 0.019535443484695866",
            "extra": "mean: 6.824853500000628 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.04585429500074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008171268489335634",
            "extra": "mean: 10.096333734691955 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.20437015205122,
            "unit": "iter/sec",
            "range": "stddev: 0.0015198818488778403",
            "extra": "mean: 26.175016000003588 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6167753.266607118,
            "unit": "iter/sec",
            "range": "stddev: 6.64709340754485e-9",
            "extra": "mean: 162.1335933480923 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13817.953093302809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053202296409859805",
            "extra": "mean: 72.36961894773496 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2119.305752409598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009761598754299527",
            "extra": "mean: 471.8526332800375 usec\nrounds: 1238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.64407625895757,
            "unit": "iter/sec",
            "range": "stddev: 0.03210909585300421",
            "extra": "mean: 26.564604564099135 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4570.535903045434,
            "unit": "iter/sec",
            "range": "stddev: 0.00003813741609825726",
            "extra": "mean: 218.7927239196789 usec\nrounds: 2684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.8440331683067,
            "unit": "iter/sec",
            "range": "stddev: 0.000022609428585740556",
            "extra": "mean: 1.466611059648533 msec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17139221424301007,
            "unit": "iter/sec",
            "range": "stddev: 0.14835769847878097",
            "extra": "mean: 5.83457075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.6210636862841,
            "unit": "iter/sec",
            "range": "stddev: 0.00022626407676934934",
            "extra": "mean: 3.4767968214272593 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10964396.317629108,
            "unit": "iter/sec",
            "range": "stddev: 3.2072394838323017e-9",
            "extra": "mean: 91.2042916940186 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.28993835097258,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462154273806223",
            "extra": "mean: 9.497583678571532 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9964.309799032008,
            "unit": "iter/sec",
            "range": "stddev: 0.000001926527932567007",
            "extra": "mean: 100.35818036259228 usec\nrounds: 6243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.15900420846515,
            "unit": "iter/sec",
            "range": "stddev: 0.011744620403744058",
            "extra": "mean: 6.128990581005993 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2081.4547332492075,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260831078150061",
            "extra": "mean: 480.43322010609995 usec\nrounds: 1313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2086.681076637733,
            "unit": "iter/sec",
            "range": "stddev: 0.00008371543630671593",
            "extra": "mean: 479.22991740132085 usec\nrounds: 1586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.83948907609775,
            "unit": "iter/sec",
            "range": "stddev: 0.0035651287966990794",
            "extra": "mean: 6.375945279411137 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.85282329729053,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040603923643285",
            "extra": "mean: 10.54264876086788 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6803514731490246,
            "unit": "iter/sec",
            "range": "stddev: 0.0014723822382564852",
            "extra": "mean: 595.113591400002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.679317028339895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003439648553408501",
            "extra": "mean: 17.337237185188314 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.9449018223146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003668489618171562",
            "extra": "mean: 3.846969080715229 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.2640596783292,
            "unit": "iter/sec",
            "range": "stddev: 0.00024284759437277187",
            "extra": "mean: 3.5427818941582907 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.56022386920677,
            "unit": "iter/sec",
            "range": "stddev: 0.00024020831855260603",
            "extra": "mean: 3.6824244204542866 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.81852496689962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495087121600963",
            "extra": "mean: 9.725873818185296 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9647219117545536,
            "unit": "iter/sec",
            "range": "stddev: 0.005486046940577175",
            "extra": "mean: 1.036568142400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.92333716316396,
            "unit": "iter/sec",
            "range": "stddev: 0.0008941378210168231",
            "extra": "mean: 10.10883810309191 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.06299358219434,
            "unit": "iter/sec",
            "range": "stddev: 0.0004730806423726576",
            "extra": "mean: 38.3685779166664 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.33889852041497,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361443530436481",
            "extra": "mean: 9.96622461224786 msec\nrounds: 98"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c87585392b664ea27f6c1e93bca354a8dc735c4d",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-20T05:35:28-05:00",
          "tree_id": "954af765954370f31653adf190d3acd5584f9f9b",
          "url": "https://github.com/ibis-project/ibis/commit/c87585392b664ea27f6c1e93bca354a8dc735c4d"
        },
        "date": 1684579765944,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.26700986929892,
            "unit": "iter/sec",
            "range": "stddev: 0.000565290060383279",
            "extra": "mean: 9.41025819047634 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9527376916712755,
            "unit": "iter/sec",
            "range": "stddev: 0.0038622625030796556",
            "extra": "mean: 1.0496068421999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 790.417602864281,
            "unit": "iter/sec",
            "range": "stddev: 0.007778875462312866",
            "extra": "mean: 1.2651540102045342 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.83064627914376,
            "unit": "iter/sec",
            "range": "stddev: 0.000041265430559549154",
            "extra": "mean: 2.359432968755589 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.18843762018659,
            "unit": "iter/sec",
            "range": "stddev: 0.00011146786100367367",
            "extra": "mean: 33.1252651290345 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.525246384312417,
            "unit": "iter/sec",
            "range": "stddev: 0.001452632854658956",
            "extra": "mean: 396.00096300000587 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.2781294327472,
            "unit": "iter/sec",
            "range": "stddev: 0.003596792175966252",
            "extra": "mean: 4.399895416667909 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2199.877488045649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411948919849726",
            "extra": "mean: 454.5707683423729 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 515.1091067368703,
            "unit": "iter/sec",
            "range": "stddev: 0.00005335362620394578",
            "extra": "mean: 1.941336285694563 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9878.2631825252,
            "unit": "iter/sec",
            "range": "stddev: 0.000003049156212027331",
            "extra": "mean: 101.23237066299423 usec\nrounds: 4179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.15539391490772,
            "unit": "iter/sec",
            "range": "stddev: 0.013167192000251578",
            "extra": "mean: 11.091959743904399 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.542992582943636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487906670935871",
            "extra": "mean: 117.0550003749895 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6045741.195522096,
            "unit": "iter/sec",
            "range": "stddev: 1.7535527372842556e-8",
            "extra": "mean: 165.40569099111747 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.53709908980998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009268103965713665",
            "extra": "mean: 9.658373749998361 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7683993024325501,
            "unit": "iter/sec",
            "range": "stddev: 0.0025512635872956845",
            "extra": "mean: 1.3014066993999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.33129826669098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007773716686746588",
            "extra": "mean: 9.966979569444986 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.66400541753262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004107669257159908",
            "extra": "mean: 9.11876231579012 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.47981455475274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007612167000420674",
            "extra": "mean: 10.364862376808317 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.82633398834943,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679027375043667",
            "extra": "mean: 23.350119117644812 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2195.003271591077,
            "unit": "iter/sec",
            "range": "stddev: 0.00008394326621233185",
            "extra": "mean: 455.58018657308736 usec\nrounds: 1147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.63979756370352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468998571250211",
            "extra": "mean: 5.2731547536275 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2532660.9142268864,
            "unit": "iter/sec",
            "range": "stddev: 1.5712039568466076e-8",
            "extra": "mean: 394.84164436811164 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.7379946458367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101860272124628",
            "extra": "mean: 1.471155074273918 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1024357.2024683217,
            "unit": "iter/sec",
            "range": "stddev: 1.0581335712514905e-7",
            "extra": "mean: 976.2219639695707 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6291.453244781301,
            "unit": "iter/sec",
            "range": "stddev: 0.0025608158085151283",
            "extra": "mean: 158.94578900820574 usec\nrounds: 3730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5482067.374804084,
            "unit": "iter/sec",
            "range": "stddev: 1.4411280459841807e-8",
            "extra": "mean: 182.4129350536329 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.38808965511723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002095361470284361",
            "extra": "mean: 10.163831857141759 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.09027868323984,
            "unit": "iter/sec",
            "range": "stddev: 0.0004465731072533454",
            "extra": "mean: 21.235805520002486 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.03342617297662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006041378446066403",
            "extra": "mean: 9.897714428568687 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.08878652174326,
            "unit": "iter/sec",
            "range": "stddev: 0.003788531259128267",
            "extra": "mean: 6.246533699998906 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.9761990189007,
            "unit": "iter/sec",
            "range": "stddev: 0.021153777552693067",
            "extra": "mean: 12.051648687501526 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.868444198988097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427288689446736",
            "extra": "mean: 38.65713733333515 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1164.1108904240898,
            "unit": "iter/sec",
            "range": "stddev: 0.000014325931075384925",
            "extra": "mean: 859.024692772779 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4582.346075358881,
            "unit": "iter/sec",
            "range": "stddev: 0.000021528267740894974",
            "extra": "mean: 218.22882505042617 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.05629127314724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999780348494806",
            "extra": "mean: 11.756919858974685 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.761851474323016,
            "unit": "iter/sec",
            "range": "stddev: 0.027743578011851153",
            "extra": "mean: 32.50779624999822 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2138.509528317103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008663585658992804",
            "extra": "mean: 467.6154053832758 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.227387624958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435335258042297",
            "extra": "mean: 6.052265392404882 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.01999806321112,
            "unit": "iter/sec",
            "range": "stddev: 0.00035812493158767335",
            "extra": "mean: 3.9679390829500045 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.76896058240965,
            "unit": "iter/sec",
            "range": "stddev: 0.010321757086804063",
            "extra": "mean: 4.20576343333681 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12395.116212932542,
            "unit": "iter/sec",
            "range": "stddev: 0.000012023895690044794",
            "extra": "mean: 80.67693620787855 usec\nrounds: 3966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.10872389352812,
            "unit": "iter/sec",
            "range": "stddev: 0.0001749023746949312",
            "extra": "mean: 7.929665522936275 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.52672947667091,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524657102785876",
            "extra": "mean: 9.947603042552664 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.13138749837273,
            "unit": "iter/sec",
            "range": "stddev: 0.00012184195276972056",
            "extra": "mean: 9.511907183908122 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2005.975414631339,
            "unit": "iter/sec",
            "range": "stddev: 0.00009736668254702998",
            "extra": "mean: 498.51059624466114 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.39096246748375,
            "unit": "iter/sec",
            "range": "stddev: 0.016431183236806268",
            "extra": "mean: 12.13725352941056 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.74004727607448,
            "unit": "iter/sec",
            "range": "stddev: 0.00012482671030767813",
            "extra": "mean: 18.608096767440106 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9538145399948551,
            "unit": "iter/sec",
            "range": "stddev: 0.0033672443332595225",
            "extra": "mean: 1.048421845200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148697.3784670729,
            "unit": "iter/sec",
            "range": "stddev: 3.012766263644536e-7",
            "extra": "mean: 6.725068123655166 usec\nrounds: 34364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.46832944094058,
            "unit": "iter/sec",
            "range": "stddev: 0.00011646624256586056",
            "extra": "mean: 5.764741052287947 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2660265.2224519067,
            "unit": "iter/sec",
            "range": "stddev: 1.975476619564657e-8",
            "extra": "mean: 375.90236926778476 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.7945218601101,
            "unit": "iter/sec",
            "range": "stddev: 0.00007978512335275588",
            "extra": "mean: 9.63441983332953 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1737.2040100384331,
            "unit": "iter/sec",
            "range": "stddev: 0.000009201672821011172",
            "extra": "mean: 575.6376304806461 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1937617.2901384658,
            "unit": "iter/sec",
            "range": "stddev: 9.947991022359461e-8",
            "extra": "mean: 516.0977893258467 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.88255458944104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002842856844902044",
            "extra": "mean: 3.705315452943042 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.16509308546205,
            "unit": "iter/sec",
            "range": "stddev: 0.00033751497397573635",
            "extra": "mean: 3.8143903455293886 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2169.7192991960333,
            "unit": "iter/sec",
            "range": "stddev: 0.00009118753447116578",
            "extra": "mean: 460.88911149499364 usec\nrounds: 1740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6102833348180186,
            "unit": "iter/sec",
            "range": "stddev: 0.001947385422217567",
            "extra": "mean: 621.0087246000171 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.42630362775975,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316225243224677",
            "extra": "mean: 3.180395496376382 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.2952701350321,
            "unit": "iter/sec",
            "range": "stddev: 0.000043570550232992895",
            "extra": "mean: 6.238487256408776 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2908731758647707,
            "unit": "iter/sec",
            "range": "stddev: 0.07516082248079621",
            "extra": "mean: 774.6694397999931 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.61547546884992,
            "unit": "iter/sec",
            "range": "stddev: 0.0007645610072249743",
            "extra": "mean: 10.038600882979305 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.796135535387826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002341449272083622",
            "extra": "mean: 20.493426150002847 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1912994.4467971611,
            "unit": "iter/sec",
            "range": "stddev: 1.0896791234661124e-7",
            "extra": "mean: 522.740670614206 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.0212360507995,
            "unit": "iter/sec",
            "range": "stddev: 0.018389533816810313",
            "extra": "mean: 11.901753021050498 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11666773.927906374,
            "unit": "iter/sec",
            "range": "stddev: 3.501087457249757e-9",
            "extra": "mean: 85.71349767975462 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.32945588735825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954754320206378",
            "extra": "mean: 9.868798675003632 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.85616089481823,
            "unit": "iter/sec",
            "range": "stddev: 0.00027482020617932595",
            "extra": "mean: 3.625077637404271 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2126.8644824123503,
            "unit": "iter/sec",
            "range": "stddev: 0.00013205482258413242",
            "extra": "mean: 470.17570149357687 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.42861508612985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574028423055427",
            "extra": "mean: 9.668504206183687 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.8763716592211,
            "unit": "iter/sec",
            "range": "stddev: 0.000013865599427376344",
            "extra": "mean: 1.331777157656842 msec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.311189974518584,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578243555600815",
            "extra": "mean: 15.79499611999836 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.48030881590863,
            "unit": "iter/sec",
            "range": "stddev: 0.0009087329834660061",
            "extra": "mean: 10.0522406082447 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6148304.80957928,
            "unit": "iter/sec",
            "range": "stddev: 8.24790976895599e-9",
            "extra": "mean: 162.64645800268596 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.5131511269263,
            "unit": "iter/sec",
            "range": "stddev: 0.00006719993690270717",
            "extra": "mean: 8.967552166665811 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.2864297791938,
            "unit": "iter/sec",
            "range": "stddev: 0.00023537725995848095",
            "extra": "mean: 3.6063791538457575 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7079042.77434444,
            "unit": "iter/sec",
            "range": "stddev: 5.114444617037471e-9",
            "extra": "mean: 141.26203667312598 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16534167228510874,
            "unit": "iter/sec",
            "range": "stddev: 0.08025710375007648",
            "extra": "mean: 6.048082048399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.3526706460139,
            "unit": "iter/sec",
            "range": "stddev: 0.000252851386254431",
            "extra": "mean: 3.671709910639115 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14025.388126468373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017794751923993278",
            "extra": "mean: 71.29927464273335 usec\nrounds: 2658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.43945862855486,
            "unit": "iter/sec",
            "range": "stddev: 0.018953506944983364",
            "extra": "mean: 12.588202604398738 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.0598650336162,
            "unit": "iter/sec",
            "range": "stddev: 0.00025097200827204323",
            "extra": "mean: 3.7727326235270477 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.57512808745204,
            "unit": "iter/sec",
            "range": "stddev: 0.0009229076334501286",
            "extra": "mean: 10.144546797979697 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.3200519608623,
            "unit": "iter/sec",
            "range": "stddev: 0.00024893421896055176",
            "extra": "mean: 4.323014764708737 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.64270534444645,
            "unit": "iter/sec",
            "range": "stddev: 0.000029584639660947217",
            "extra": "mean: 5.008948352381248 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4518945.202178812,
            "unit": "iter/sec",
            "range": "stddev: 1.0946125777013529e-8",
            "extra": "mean: 221.29057894222632 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2163.8314038224044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012392524474293964",
            "extra": "mean: 462.1432142233918 usec\nrounds: 1153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2145.7177346720005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868718474290246",
            "extra": "mean: 466.044523863183 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.44399287701617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005303169299340793",
            "extra": "mean: 17.716677170214815 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.04572415831714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379327657918992",
            "extra": "mean: 9.995429673911422 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.56876055263889,
            "unit": "iter/sec",
            "range": "stddev: 0.000914927856255535",
            "extra": "mean: 10.687327630437416 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.824142339828246,
            "unit": "iter/sec",
            "range": "stddev: 0.000607353340064644",
            "extra": "mean: 53.12327021052074 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "bbe6400539558e017b2c9f37bfccb3473f35e3cd",
          "message": "chore(flake/nixpkgs): `5dcb4a7a` -> `33bd20c0`",
          "timestamp": "2023-05-21T00:37:13Z",
          "tree_id": "5db1ab3189c0b4ee8200c0aef3c0c88d0a02ccff",
          "url": "https://github.com/ibis-project/ibis/commit/bbe6400539558e017b2c9f37bfccb3473f35e3cd"
        },
        "date": 1684629944261,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4658253.410169876,
            "unit": "iter/sec",
            "range": "stddev: 4.7327101499608764e-7",
            "extra": "mean: 214.67273502484673 nsec\nrounds: 29326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 840549.6485236397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023209269434830257",
            "extra": "mean: 1.1896977195296228 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 249.8176435293827,
            "unit": "iter/sec",
            "range": "stddev: 0.000675213346714295",
            "extra": "mean: 4.002919833331881 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.52807570385772,
            "unit": "iter/sec",
            "range": "stddev: 0.0012651877764564153",
            "extra": "mean: 7.324500802084799 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 924.6257305152417,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547522477373798",
            "extra": "mean: 1.0815186804749166 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9750235384624859,
            "unit": "iter/sec",
            "range": "stddev: 0.034423761631623265",
            "extra": "mean: 1.0256162652000171 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.34214199538988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576339512807183",
            "extra": "mean: 5.253697313252996 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1631.7367162914416,
            "unit": "iter/sec",
            "range": "stddev: 0.00025487918452205634",
            "extra": "mean: 612.8439655833496 usec\nrounds: 1046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.19534771665526,
            "unit": "iter/sec",
            "range": "stddev: 0.0013515355382215056",
            "extra": "mean: 13.12416085715183 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4774664.64211972,
            "unit": "iter/sec",
            "range": "stddev: 5.316411004877895e-7",
            "extra": "mean: 209.43879307835073 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.523648418959827,
            "unit": "iter/sec",
            "range": "stddev: 0.02751960091113811",
            "extra": "mean: 1.9096782569999846 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 159.8227044122992,
            "unit": "iter/sec",
            "range": "stddev: 0.0008374162914771279",
            "extra": "mean: 6.256933291657181 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9935.253093071778,
            "unit": "iter/sec",
            "range": "stddev: 0.00009578216404597022",
            "extra": "mean: 100.6516885510785 usec\nrounds: 1721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5426997.570530928,
            "unit": "iter/sec",
            "range": "stddev: 4.4335236060707677e-7",
            "extra": "mean: 184.2639483439 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 61.1348289411552,
            "unit": "iter/sec",
            "range": "stddev: 0.002187806259048809",
            "extra": "mean: 16.357287937495357 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.5818363027259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005262274127249021",
            "extra": "mean: 3.349165549997224 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1571.9912886839327,
            "unit": "iter/sec",
            "range": "stddev: 0.00017296766798762458",
            "extra": "mean: 636.1358406999809 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5841995904253757,
            "unit": "iter/sec",
            "range": "stddev: 0.033476505148609746",
            "extra": "mean: 1.7117437540000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1475081.3759582222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019066949818293903",
            "extra": "mean: 677.9287002728197 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1381.6553262623324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004937086989145969",
            "extra": "mean: 723.7695111017375 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.060975747977334,
            "unit": "iter/sec",
            "range": "stddev: 0.003665297380968446",
            "extra": "mean: 71.11881976923613 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5781899409860096,
            "unit": "iter/sec",
            "range": "stddev: 0.028430168630948934",
            "extra": "mean: 1.7295354504000215 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1502.6423222498738,
            "unit": "iter/sec",
            "range": "stddev: 0.00025063816229765006",
            "extra": "mean: 665.4943662858648 usec\nrounds: 789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 63.270620970186116,
            "unit": "iter/sec",
            "range": "stddev: 0.019223231349062914",
            "extra": "mean: 15.805123842094298 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.99364477203267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814816059342337",
            "extra": "mean: 5.20850573563187 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.75150828596821,
            "unit": "iter/sec",
            "range": "stddev: 0.002018779560768766",
            "extra": "mean: 13.559044733329984 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.886971528552568,
            "unit": "iter/sec",
            "range": "stddev: 0.004332434312029858",
            "extra": "mean: 37.19273473913014 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4772.997470555418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069151109800967",
            "extra": "mean: 209.51194844937416 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 56.65805651030219,
            "unit": "iter/sec",
            "range": "stddev: 0.028455691528269822",
            "extra": "mean: 17.649740594581974 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.64016502773969,
            "unit": "iter/sec",
            "range": "stddev: 0.0025793816140720236",
            "extra": "mean: 25.22693836668471 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.09177465209393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009854026194231042",
            "extra": "mean: 5.1788845060943975 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 77.69572429456237,
            "unit": "iter/sec",
            "range": "stddev: 0.0012086457624965383",
            "extra": "mean: 12.87072112499743 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 380.7598629634902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005445872562862807",
            "extra": "mean: 2.6263272400008364 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 92.94497097323296,
            "unit": "iter/sec",
            "range": "stddev: 0.03167278113309593",
            "extra": "mean: 10.759054411754972 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 133.54203701837807,
            "unit": "iter/sec",
            "range": "stddev: 0.0015409304374790515",
            "extra": "mean: 7.48827876470373 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 150.1868508087561,
            "unit": "iter/sec",
            "range": "stddev: 0.00513788845075027",
            "extra": "mean: 6.658372518066666 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.54202743003129,
            "unit": "iter/sec",
            "range": "stddev: 0.0021939967733647626",
            "extra": "mean: 23.506166969702985 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2938.844041663583,
            "unit": "iter/sec",
            "range": "stddev: 0.00018895570204881845",
            "extra": "mean: 340.2698427759824 usec\nrounds: 706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 101.2408114343893,
            "unit": "iter/sec",
            "range": "stddev: 0.002089548985350799",
            "extra": "mean: 9.877439600018079 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 586.1371111497175,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320563133299733",
            "extra": "mean: 1.706085455054166 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0289396042344727,
            "unit": "iter/sec",
            "range": "stddev: 0.03658325391398147",
            "extra": "mean: 971.8743412000322 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1504.8651844142867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852782058320518",
            "extra": "mean: 664.5113531476994 usec\nrounds: 841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 2603359.1995551204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008380450350310774",
            "extra": "mean: 384.1191028002923 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.298396446818924,
            "unit": "iter/sec",
            "range": "stddev: 0.0027316012103785828",
            "extra": "mean: 44.84627414285028 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 68.13808784285322,
            "unit": "iter/sec",
            "range": "stddev: 0.001436487293476079",
            "extra": "mean: 14.676079585712744 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3407185.774889307,
            "unit": "iter/sec",
            "range": "stddev: 7.870145213511797e-7",
            "extra": "mean: 293.4973512068736 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.92058145856043,
            "unit": "iter/sec",
            "range": "stddev: 0.001059492393653457",
            "extra": "mean: 11.63865494185815 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 73.41227297945365,
            "unit": "iter/sec",
            "range": "stddev: 0.0015671493651717389",
            "extra": "mean: 13.62170056061166 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.04713140267171,
            "unit": "iter/sec",
            "range": "stddev: 0.027622960642682087",
            "extra": "mean: 16.38078607500688 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1551.2361522543717,
            "unit": "iter/sec",
            "range": "stddev: 0.00027573566320635164",
            "extra": "mean: 644.6471728670878 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.6397549958462,
            "unit": "iter/sec",
            "range": "stddev: 0.0020193915665866918",
            "extra": "mean: 13.766566256414045 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1564.482370739833,
            "unit": "iter/sec",
            "range": "stddev: 0.00030548591415639314",
            "extra": "mean: 639.1890498114765 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.26323569315775,
            "unit": "iter/sec",
            "range": "stddev: 0.0016941756425190406",
            "extra": "mean: 13.465613108103975 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1315.881035482376,
            "unit": "iter/sec",
            "range": "stddev: 0.00021486126411049257",
            "extra": "mean: 759.9471175853064 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09599188978376742,
            "unit": "iter/sec",
            "range": "stddev: 0.11498539462066601",
            "extra": "mean: 10.417546755800027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9474634.754971148,
            "unit": "iter/sec",
            "range": "stddev: 2.402321481185684e-7",
            "extra": "mean: 105.54496567537296 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 57.87432335867561,
            "unit": "iter/sec",
            "range": "stddev: 0.026886878193479066",
            "extra": "mean: 17.27881972463866 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.05360604942346,
            "unit": "iter/sec",
            "range": "stddev: 0.0014453518270923717",
            "extra": "mean: 10.410853284211521 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.305335114681007,
            "unit": "iter/sec",
            "range": "stddev: 0.0024932871965000864",
            "extra": "mean: 31.943437000009567 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.32925889462392,
            "unit": "iter/sec",
            "range": "stddev: 0.0019566463560980714",
            "extra": "mean: 13.82566357353245 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.97648313207314,
            "unit": "iter/sec",
            "range": "stddev: 0.001964921650574069",
            "extra": "mean: 13.703044557384274 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.4847008539729,
            "unit": "iter/sec",
            "range": "stddev: 0.0018139639811666126",
            "extra": "mean: 57.19285724998713 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 185.90034528332026,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976334248503567",
            "extra": "mean: 5.379226157304636 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.44831693301845,
            "unit": "iter/sec",
            "range": "stddev: 0.00479537412669178",
            "extra": "mean: 8.587500672725085 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 64.99102333155174,
            "unit": "iter/sec",
            "range": "stddev: 0.030431679320246954",
            "extra": "mean: 15.386740333330334 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1540.1816592103612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268121614890397",
            "extra": "mean: 649.2740606408026 usec\nrounds: 808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.87571544536127,
            "unit": "iter/sec",
            "range": "stddev: 0.0018624486510990489",
            "extra": "mean: 14.311123594604789 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.920215472061706,
            "unit": "iter/sec",
            "range": "stddev: 0.0030755745939591516",
            "extra": "mean: 21.312775100008707 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8687.574134937448,
            "unit": "iter/sec",
            "range": "stddev: 0.00020543293002437193",
            "extra": "mean: 115.10693140199605 usec\nrounds: 3659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.48584558506803,
            "unit": "iter/sec",
            "range": "stddev: 0.0020598693960709835",
            "extra": "mean: 13.608062777782001 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 193.8062512009145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009500153943947347",
            "extra": "mean: 5.159792286386691 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.70994842747618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012642093478786448",
            "extra": "mean: 11.401215231894245 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7323.252241787633,
            "unit": "iter/sec",
            "range": "stddev: 0.00008450681107736161",
            "extra": "mean: 136.55135273012206 usec\nrounds: 4193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 56.39319299498057,
            "unit": "iter/sec",
            "range": "stddev: 0.03085343120072866",
            "extra": "mean: 17.7326366338045 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 136.58793806372466,
            "unit": "iter/sec",
            "range": "stddev: 0.0009221899451795674",
            "extra": "mean: 7.3212906950352625 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121804.2289688909,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432975256170598",
            "extra": "mean: 8.209895571486294 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1605867.1936186093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016621462430388154",
            "extra": "mean: 622.7165010741842 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 182.128565038931,
            "unit": "iter/sec",
            "range": "stddev: 0.0010147708259229302",
            "extra": "mean: 5.490626908449229 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.8466103552793,
            "unit": "iter/sec",
            "range": "stddev: 0.002097683057662471",
            "extra": "mean: 14.73912985134397 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 167.34699138439456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009637966136056737",
            "extra": "mean: 5.975607877544741 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 484.72606828097514,
            "unit": "iter/sec",
            "range": "stddev: 0.0004377063597001608",
            "extra": "mean: 2.063020880115617 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1506.0465014984725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282134176583266",
            "extra": "mean: 663.9901218222872 usec\nrounds: 944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.36407025811528,
            "unit": "iter/sec",
            "range": "stddev: 0.0016305136898037925",
            "extra": "mean: 14.416685703114496 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 94.99012918854532,
            "unit": "iter/sec",
            "range": "stddev: 0.023833780714327044",
            "extra": "mean: 10.527409621847193 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.095930032893589,
            "unit": "iter/sec",
            "range": "stddev: 0.01424161156158731",
            "extra": "mean: 164.04387757143013 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 65.73074202738708,
            "unit": "iter/sec",
            "range": "stddev: 0.0028544507155795645",
            "extra": "mean: 15.213581486473169 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 65.69292181300575,
            "unit": "iter/sec",
            "range": "stddev: 0.0018547655847197348",
            "extra": "mean: 15.222340130440383 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.939913009513004,
            "unit": "iter/sec",
            "range": "stddev: 0.01563821185668979",
            "extra": "mean: 515.4870321999852 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1636131.5486384667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043453347148343716",
            "extra": "mean: 611.197798142922 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.50101207734601,
            "unit": "iter/sec",
            "range": "stddev: 0.05213853823911309",
            "extra": "mean: 39.21412989284282 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.009253511438217,
            "unit": "iter/sec",
            "range": "stddev: 0.003097142447624713",
            "extra": "mean: 37.024347954544815 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1527530.3742740308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037001650597605913",
            "extra": "mean: 654.651466734504 nsec\nrounds: 166667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1e99e9f4934e03e417c31601bbdb21de42035b1d",
          "message": "chore(deps): update cpcloud/compare-commits-action action to v5.0.32",
          "timestamp": "2023-05-21T04:22:31-05:00",
          "tree_id": "6174950c16384b0e9a3b12ba8f0d10178c5ed562",
          "url": "https://github.com/ibis-project/ibis/commit/1e99e9f4934e03e417c31601bbdb21de42035b1d"
        },
        "date": 1684661182155,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1631810.2564484891,
            "unit": "iter/sec",
            "range": "stddev: 8.508636678728912e-8",
            "extra": "mean: 612.8163467831266 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.686131285592985,
            "unit": "iter/sec",
            "range": "stddev: 0.00029260433748071055",
            "extra": "mean: 33.685763576923584 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.55469966500827,
            "unit": "iter/sec",
            "range": "stddev: 0.008603746666396685",
            "extra": "mean: 9.211945711110856 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 185.68473661459728,
            "unit": "iter/sec",
            "range": "stddev: 0.0015097467047870876",
            "extra": "mean: 5.385472269999099 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.5019110436832,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781863516850289",
            "extra": "mean: 3.7105488273807126 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6139401.5081920605,
            "unit": "iter/sec",
            "range": "stddev: 1.0212839411187737e-8",
            "extra": "mean: 162.88232634146192 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 78.13615645685104,
            "unit": "iter/sec",
            "range": "stddev: 0.009644631275299334",
            "extra": "mean: 12.798172387097486 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.61098347967122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810976484167123",
            "extra": "mean: 9.841455773332465 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2344.375943237349,
            "unit": "iter/sec",
            "range": "stddev: 0.00008182831755686419",
            "extra": "mean: 426.55274760203343 usec\nrounds: 1668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.35753069503984,
            "unit": "iter/sec",
            "range": "stddev: 0.010427851205674361",
            "extra": "mean: 11.447210012047421 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139851.92893097876,
            "unit": "iter/sec",
            "range": "stddev: 3.50813285157593e-7",
            "extra": "mean: 7.150419787871006 usec\nrounds: 36497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7856329639370989,
            "unit": "iter/sec",
            "range": "stddev: 0.0017446435675077172",
            "extra": "mean: 1.2728590142000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.4506753305617,
            "unit": "iter/sec",
            "range": "stddev: 0.00023892909092022946",
            "extra": "mean: 3.6172818127655693 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 190.2802699467909,
            "unit": "iter/sec",
            "range": "stddev: 0.01083507257256962",
            "extra": "mean: 5.25540561971893 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1857280.5673340529,
            "unit": "iter/sec",
            "range": "stddev: 9.298650839546078e-8",
            "extra": "mean: 538.4216136151166 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.700370826315854,
            "unit": "iter/sec",
            "range": "stddev: 0.00021438645713177956",
            "extra": "mean: 18.28141171428602 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12211442.820334753,
            "unit": "iter/sec",
            "range": "stddev: 3.778457377024553e-9",
            "extra": "mean: 81.89040514794017 nsec\nrounds: 125016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.5738952900863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000471930008755389",
            "extra": "mean: 1.3217479564459187 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.40770040092954,
            "unit": "iter/sec",
            "range": "stddev: 0.00082592327117911",
            "extra": "mean: 10.481334271738271 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 397.30350165358806,
            "unit": "iter/sec",
            "range": "stddev: 0.00016639959483017802",
            "extra": "mean: 2.5169674967322777 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2343.9630561796444,
            "unit": "iter/sec",
            "range": "stddev: 0.000080646000912111",
            "extra": "mean: 426.6278844982609 usec\nrounds: 329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2270.113266156397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008656371868570894",
            "extra": "mean: 440.5066544072194 usec\nrounds: 1577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.32559384698617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083080536047721",
            "extra": "mean: 9.96754628260833 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4728612.129748067,
            "unit": "iter/sec",
            "range": "stddev: 1.2706416966434265e-8",
            "extra": "mean: 211.4785422363004 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.503628106720495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005070826462791693",
            "extra": "mean: 36.358839500002205 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.71851625206844,
            "unit": "iter/sec",
            "range": "stddev: 0.00009647571340401742",
            "extra": "mean: 5.789767198674764 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.52464659410399,
            "unit": "iter/sec",
            "range": "stddev: 0.00014808066756867013",
            "extra": "mean: 20.191966399999554 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.5674464629057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284005715353639",
            "extra": "mean: 3.589794904959079 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.7140256927686,
            "unit": "iter/sec",
            "range": "stddev: 0.00023692884663767185",
            "extra": "mean: 3.562344266668257 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.4460884158852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454115452991826",
            "extra": "mean: 2.367165958974464 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.5675142401973,
            "unit": "iter/sec",
            "range": "stddev: 0.00022881485440966244",
            "extra": "mean: 3.5389772341273007 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.94342770166285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252484437244079",
            "extra": "mean: 21.765898846154368 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.5163892411121,
            "unit": "iter/sec",
            "range": "stddev: 0.014236965991245458",
            "extra": "mean: 11.426431193875576 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.26267273667565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002127565873857475",
            "extra": "mean: 9.50004378571683 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.40203209385317,
            "unit": "iter/sec",
            "range": "stddev: 0.0009806824193684337",
            "extra": "mean: 10.822272815215745 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.89619414905337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008444201522788379",
            "extra": "mean: 10.537830404761024 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11758.352500294273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002955532757399073",
            "extra": "mean: 85.04592798820865 usec\nrounds: 5513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6489267465262372,
            "unit": "iter/sec",
            "range": "stddev: 0.0018095623838186687",
            "extra": "mean: 606.455078800002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.1700400141912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003770636224959629",
            "extra": "mean: 1.8616079183671181 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5823811.649992934,
            "unit": "iter/sec",
            "range": "stddev: 8.710798538626969e-9",
            "extra": "mean: 171.70884982213354 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.470495463843,
            "unit": "iter/sec",
            "range": "stddev: 0.00030249143597468994",
            "extra": "mean: 3.6972609462819643 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.132037263730865,
            "unit": "iter/sec",
            "range": "stddev: 0.00017389425012381065",
            "extra": "mean: 16.9113063962259 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17595535527956951,
            "unit": "iter/sec",
            "range": "stddev: 0.09233924884398975",
            "extra": "mean: 5.683259815600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.15271949293664,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860345187841338",
            "extra": "mean: 9.33247429213328 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.52575627930385,
            "unit": "iter/sec",
            "range": "stddev: 0.0011330223340404342",
            "extra": "mean: 10.253701567164489 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 225.30155483952348,
            "unit": "iter/sec",
            "range": "stddev: 0.00034135242212342173",
            "extra": "mean: 4.43849577830155 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 101.39319620439576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002101542731750834",
            "extra": "mean: 9.86259470491617 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.844582378500775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203109451810648",
            "extra": "mean: 53.065649315787994 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.417517541996869,
            "unit": "iter/sec",
            "range": "stddev: 0.00022516673937048685",
            "extra": "mean: 118.7998712222193 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.84408173129191,
            "unit": "iter/sec",
            "range": "stddev: 0.015655913589079834",
            "extra": "mean: 11.786325923911596 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9386.47654665768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018507510882079254",
            "extra": "mean: 106.53624872221924 usec\nrounds: 5283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.185997567763,
            "unit": "iter/sec",
            "range": "stddev: 0.000027750736223097172",
            "extra": "mean: 1.4788830345452197 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.89537685079324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081565624493181",
            "extra": "mean: 3.8037945435896803 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.46900443377119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397034144880502",
            "extra": "mean: 9.95331849495131 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1878288.5787985753,
            "unit": "iter/sec",
            "range": "stddev: 1.2394397549439016e-7",
            "extra": "mean: 532.3995531291778 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.10271097156129,
            "unit": "iter/sec",
            "range": "stddev: 0.002780834030252408",
            "extra": "mean: 17.824450595745798 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1076424.9272562691,
            "unit": "iter/sec",
            "range": "stddev: 1.2480716401147952e-7",
            "extra": "mean: 929.0011543572566 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2551965.9841234684,
            "unit": "iter/sec",
            "range": "stddev: 1.814322308784251e-8",
            "extra": "mean: 391.8547528537771 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.60216265899717,
            "unit": "iter/sec",
            "range": "stddev: 0.004271571044647968",
            "extra": "mean: 4.512591339367055 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.3775327987549,
            "unit": "iter/sec",
            "range": "stddev: 0.0006976105606890382",
            "extra": "mean: 9.864118531914814 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2241.3766574752003,
            "unit": "iter/sec",
            "range": "stddev: 0.00010540997661830659",
            "extra": "mean: 446.15437421680406 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.81138592818245,
            "unit": "iter/sec",
            "range": "stddev: 0.000663557574292359",
            "extra": "mean: 10.437172892474097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.31168771435621,
            "unit": "iter/sec",
            "range": "stddev: 0.016329255872348694",
            "extra": "mean: 10.60313969811166 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9076764384444106,
            "unit": "iter/sec",
            "range": "stddev: 0.0021081423335485273",
            "extra": "mean: 1.1017141765999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.00483661968826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504453611675587",
            "extra": "mean: 9.900515989796434 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4716.145671137347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540511997274232",
            "extra": "mean: 212.0375556081667 usec\nrounds: 2104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 184.67290129485454,
            "unit": "iter/sec",
            "range": "stddev: 0.00005575482565623619",
            "extra": "mean: 5.414979636906059 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.14239321715084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007506486524928994",
            "extra": "mean: 9.887050999999758 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.13521649131258,
            "unit": "iter/sec",
            "range": "stddev: 0.0006507445337869644",
            "extra": "mean: 9.602899323529273 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2283.2467345930604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008057615099058032",
            "extra": "mean: 437.9728151360867 usec\nrounds: 1731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.580357133043194,
            "unit": "iter/sec",
            "range": "stddev: 0.029292644969231535",
            "extra": "mean: 32.70072993750173 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.35857956823781,
            "unit": "iter/sec",
            "range": "stddev: 0.00003941841497724296",
            "extra": "mean: 6.395555669291439 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2269.188656551456,
            "unit": "iter/sec",
            "range": "stddev: 0.00008155548795704912",
            "extra": "mean: 440.68614441239345 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7368234.546221797,
            "unit": "iter/sec",
            "range": "stddev: 3.955414981243154e-9",
            "extra": "mean: 135.71772094482023 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8110.907741384055,
            "unit": "iter/sec",
            "range": "stddev: 0.00002465418713388916",
            "extra": "mean: 123.29076249970497 usec\nrounds: 3680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.04767988206802,
            "unit": "iter/sec",
            "range": "stddev: 0.000667494539872713",
            "extra": "mean: 10.096147645160983 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.998104160219,
            "unit": "iter/sec",
            "range": "stddev: 0.00001432242911842293",
            "extra": "mean: 841.7521850397962 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9020156637036907,
            "unit": "iter/sec",
            "range": "stddev: 0.006385761959083616",
            "extra": "mean: 1.1086281982000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.30555870544087,
            "unit": "iter/sec",
            "range": "stddev: 0.017089277865841055",
            "extra": "mean: 11.861614054346603 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3293685282112626,
            "unit": "iter/sec",
            "range": "stddev: 0.0035051992280142395",
            "extra": "mean: 752.2368544000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6356347.624236919,
            "unit": "iter/sec",
            "range": "stddev: 1.1365080154545052e-8",
            "extra": "mean: 157.32305076962388 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2281.002532781968,
            "unit": "iter/sec",
            "range": "stddev: 0.00010906320380426576",
            "extra": "mean: 438.40372188468143 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2314.678583290857,
            "unit": "iter/sec",
            "range": "stddev: 0.00008496375164747609",
            "extra": "mean: 432.0254255682731 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.1280990867899,
            "unit": "iter/sec",
            "range": "stddev: 0.00008549267777360639",
            "extra": "mean: 6.130151737181495 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.21279850498506,
            "unit": "iter/sec",
            "range": "stddev: 0.0009399271710728218",
            "extra": "mean: 10.07934475258002 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.7985317698974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006734758715702979",
            "extra": "mean: 569.5414262546227 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4939239458519573,
            "unit": "iter/sec",
            "range": "stddev: 0.0026859974788160123",
            "extra": "mean: 400.97453720000544 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 147.53146122532502,
            "unit": "iter/sec",
            "range": "stddev: 0.004661162318383434",
            "extra": "mean: 6.778215247747722 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2225.7126370141677,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476460994175771",
            "extra": "mean: 449.2942994390854 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13433.562577524015,
            "unit": "iter/sec",
            "range": "stddev: 0.000002664176410342265",
            "extra": "mean: 74.44041699505101 usec\nrounds: 7108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.13782658656586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008493620422078885",
            "extra": "mean: 10.40173296511509 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.34482807796228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291310735262262",
            "extra": "mean: 22.05323170000071 msec\nrounds: 40"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "66c0afb9a3ec522b1fdfa67097c085285acd7fa6",
          "message": "feat(datafusion): add string functions",
          "timestamp": "2023-05-21T06:16:58-05:00",
          "tree_id": "203c8494a4b078b19ebefc988fc9144f2ab280d2",
          "url": "https://github.com/ibis-project/ibis/commit/66c0afb9a3ec522b1fdfa67097c085285acd7fa6"
        },
        "date": 1684668225392,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.6375965059453,
            "unit": "iter/sec",
            "range": "stddev: 0.00020322176514399058",
            "extra": "mean: 4.021917899999039 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.59872305789341,
            "unit": "iter/sec",
            "range": "stddev: 0.0010183262942182636",
            "extra": "mean: 13.774346956523686 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.45313201775483,
            "unit": "iter/sec",
            "range": "stddev: 0.0011777177806497287",
            "extra": "mean: 13.07990887499244 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.47176359713,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489830410575533",
            "extra": "mean: 3.273624993106876 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 184.53300182581145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587578724144989",
            "extra": "mean: 5.419084879700502 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3223599.2513809483,
            "unit": "iter/sec",
            "range": "stddev: 2.3563627225693343e-7",
            "extra": "mean: 310.21225717553125 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1455697.5507576948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019398610943945267",
            "extra": "mean: 686.9558854993587 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1325.6310596142605,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976829378377214",
            "extra": "mean: 754.3577021279101 usec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.55417030542574,
            "unit": "iter/sec",
            "range": "stddev: 0.0013378541437645323",
            "extra": "mean: 13.413065907692411 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.02017738232556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777045513291036",
            "extra": "mean: 5.180805517649305 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7370.790434578793,
            "unit": "iter/sec",
            "range": "stddev: 0.000040363362702040005",
            "extra": "mean: 135.6706595955669 usec\nrounds: 4007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1221.596779950315,
            "unit": "iter/sec",
            "range": "stddev: 0.000278968262079848",
            "extra": "mean: 818.6007170391134 usec\nrounds: 986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.81108782615874,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416749503523652",
            "extra": "mean: 15.67125767741668 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.04320536132931,
            "unit": "iter/sec",
            "range": "stddev: 0.0014330248536863043",
            "extra": "mean: 13.690527339992968 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 185.69958141304238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797794064495573",
            "extra": "mean: 5.385041756102559 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 70.9739139062006,
            "unit": "iter/sec",
            "range": "stddev: 0.0019089669931450786",
            "extra": "mean: 14.089683729737716 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 161.12137845427765,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913335854551493",
            "extra": "mean: 6.206501021736082 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.51883594900349,
            "unit": "iter/sec",
            "range": "stddev: 0.0030243804577493693",
            "extra": "mean: 35.06454477273089 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5959889381373084,
            "unit": "iter/sec",
            "range": "stddev: 0.016369993395108827",
            "extra": "mean: 1.6778834907999793 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.196256404172072,
            "unit": "iter/sec",
            "range": "stddev: 0.030723965587639346",
            "extra": "mean: 36.76976658620537 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.52437148946534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007636110663070629",
            "extra": "mean: 11.425389099998995 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8546.915916439959,
            "unit": "iter/sec",
            "range": "stddev: 0.000036344716356698864",
            "extra": "mean: 117.00126803359606 usec\nrounds: 2731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.8235421128924,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294397394816987",
            "extra": "mean: 11.789179926830823 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5887.742260864445,
            "unit": "iter/sec",
            "range": "stddev: 0.00014418790799765473",
            "extra": "mean: 169.84439122733932 usec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 67.67717704619542,
            "unit": "iter/sec",
            "range": "stddev: 0.0013581478428872599",
            "extra": "mean: 14.776030024382003 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.5328618410154755,
            "unit": "iter/sec",
            "range": "stddev: 0.004817736835613079",
            "extra": "mean: 153.0722712857125 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4190027.5806189557,
            "unit": "iter/sec",
            "range": "stddev: 6.339023384271231e-7",
            "extra": "mean: 238.66191349803822 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5302472.850943086,
            "unit": "iter/sec",
            "range": "stddev: 1.417247719877253e-7",
            "extra": "mean: 188.59125319655067 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.996371468689997,
            "unit": "iter/sec",
            "range": "stddev: 0.002882185889376837",
            "extra": "mean: 71.44708914285454 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 123.79502787848111,
            "unit": "iter/sec",
            "range": "stddev: 0.013286845863092967",
            "extra": "mean: 8.07786885416443 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4329498.788456296,
            "unit": "iter/sec",
            "range": "stddev: 4.0368722425016406e-7",
            "extra": "mean: 230.97361816251038 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.45620524582374,
            "unit": "iter/sec",
            "range": "stddev: 0.0015825254768351258",
            "extra": "mean: 19.819167833331463 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 197.07414207115133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396761707636875",
            "extra": "mean: 5.074232415731951 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.663746601324,
            "unit": "iter/sec",
            "range": "stddev: 0.0016486912591996698",
            "extra": "mean: 13.95405693150747 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.57551918305434,
            "unit": "iter/sec",
            "range": "stddev: 0.0017765347662784354",
            "extra": "mean: 13.971257371427523 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 787263.3193198135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028780099845158655",
            "extra": "mean: 1.2702230314299268 usec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0991270320718745,
            "unit": "iter/sec",
            "range": "stddev: 0.016517418822059128",
            "extra": "mean: 909.8129432000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1587.8296990384265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013988876069525037",
            "extra": "mean: 629.7904621670635 usec\nrounds: 978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10260.598592122553,
            "unit": "iter/sec",
            "range": "stddev: 0.000022200064345545006",
            "extra": "mean: 97.46020088610986 usec\nrounds: 2260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.652105792089202,
            "unit": "iter/sec",
            "range": "stddev: 0.0013251921114928475",
            "extra": "mean: 37.520487416675984 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.796204267644224,
            "unit": "iter/sec",
            "range": "stddev: 0.04105382197366586",
            "extra": "mean: 35.97613510000126 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.049230377126914,
            "unit": "iter/sec",
            "range": "stddev: 0.002581872821657413",
            "extra": "mean: 45.35305690476001 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.3627535092977,
            "unit": "iter/sec",
            "range": "stddev: 0.0013400729409352146",
            "extra": "mean: 13.63089513636186 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1446.0257719483504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019910752636942904",
            "extra": "mean: 691.5506067728081 usec\nrounds: 1063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.34510924824257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006534018255503865",
            "extra": "mean: 7.914829516947922 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3009.9101524075572,
            "unit": "iter/sec",
            "range": "stddev: 0.00009645271547049935",
            "extra": "mean: 332.23583076063693 usec\nrounds: 1684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 876.1876678178846,
            "unit": "iter/sec",
            "range": "stddev: 0.00006836183904677325",
            "extra": "mean: 1.1413080059554659 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.21822632604119,
            "unit": "iter/sec",
            "range": "stddev: 0.0011133591219538326",
            "extra": "mean: 13.294650098041352 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 117.68825887672034,
            "unit": "iter/sec",
            "range": "stddev: 0.004227511306956678",
            "extra": "mean: 8.497024338235052 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.72187735873095,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279848699820228",
            "extra": "mean: 12.236625397264723 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481793.600146918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021768585021307127",
            "extra": "mean: 674.85782088737 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1506.0483554446057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001787863945646868",
            "extra": "mean: 663.9893044501791 usec\nrounds: 854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 194.8881127854409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527394648280809",
            "extra": "mean: 5.131149282054646 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1515.8716201954478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384492143583874",
            "extra": "mean: 659.6864712534599 usec\nrounds: 974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.032402317576035,
            "unit": "iter/sec",
            "range": "stddev: 0.014479089578247614",
            "extra": "mean: 968.6146408000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.38090736512484,
            "unit": "iter/sec",
            "range": "stddev: 0.00042200677481121524",
            "extra": "mean: 6.974429290320102 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 57.99753329811755,
            "unit": "iter/sec",
            "range": "stddev: 0.02552021486157876",
            "extra": "mean: 17.24211260606246 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1387855.4673034062,
            "unit": "iter/sec",
            "range": "stddev: 0.00000154131105599009",
            "extra": "mean: 720.536124660728 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.99215914042645,
            "unit": "iter/sec",
            "range": "stddev: 0.001909731455593524",
            "extra": "mean: 14.707578236112006 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1396.5345621747867,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530025850671588",
            "extra": "mean: 716.0581822212306 usec\nrounds: 675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.71722449169962,
            "unit": "iter/sec",
            "range": "stddev: 0.001338278263531954",
            "extra": "mean: 13.383794791669365 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5412521483795729,
            "unit": "iter/sec",
            "range": "stddev: 0.03020414752099778",
            "extra": "mean: 1.8475677241999846 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.85478722286328,
            "unit": "iter/sec",
            "range": "stddev: 0.0010050384957762959",
            "extra": "mean: 25.091088666666757 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.3595033196484,
            "unit": "iter/sec",
            "range": "stddev: 0.0012604875489221495",
            "extra": "mean: 13.448180196972412 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1551398.016714842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011928372632277286",
            "extra": "mean: 644.5799138750654 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 162.2680881386334,
            "unit": "iter/sec",
            "range": "stddev: 0.003569170400794613",
            "extra": "mean: 6.162641166670134 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09911429106029142,
            "unit": "iter/sec",
            "range": "stddev: 0.129332605268204",
            "extra": "mean: 10.089362384599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9870346095054716,
            "unit": "iter/sec",
            "range": "stddev: 0.004598425983681659",
            "extra": "mean: 503.2624974000214 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4327408.782865925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011819116130061272",
            "extra": "mean: 231.08517132916677 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 91.31404318673921,
            "unit": "iter/sec",
            "range": "stddev: 0.0010564202500374102",
            "extra": "mean: 10.951218072284655 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 503.9155812179265,
            "unit": "iter/sec",
            "range": "stddev: 0.00015716888111355005",
            "extra": "mean: 1.984459376277023 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1553.9164380475831,
            "unit": "iter/sec",
            "range": "stddev: 0.00014681930390946605",
            "extra": "mean: 643.5352477874866 usec\nrounds: 678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5781479359813936,
            "unit": "iter/sec",
            "range": "stddev: 0.03974037369268591",
            "extra": "mean: 1.729661108799985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 191.30047052908623,
            "unit": "iter/sec",
            "range": "stddev: 0.000488361254677653",
            "extra": "mean: 5.227378674157287 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.9192991239395,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245316053035102",
            "extra": "mean: 8.409064023811515 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121830.60984652811,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061921177005785335",
            "extra": "mean: 8.208117822439823 usec\nrounds: 22780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.08235311208627,
            "unit": "iter/sec",
            "range": "stddev: 0.0007179946575441835",
            "extra": "mean: 8.059163732143913 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.13553822246836,
            "unit": "iter/sec",
            "range": "stddev: 0.000713328145359911",
            "extra": "mean: 13.488807446155814 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.465095343139396,
            "unit": "iter/sec",
            "range": "stddev: 0.0021570786014197506",
            "extra": "mean: 54.1562326875038 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.65115097238696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008364663761738935",
            "extra": "mean: 13.395640749998542 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.29907705731542,
            "unit": "iter/sec",
            "range": "stddev: 0.0015744850274123229",
            "extra": "mean: 13.459117388882033 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1503.8303148457658,
            "unit": "iter/sec",
            "range": "stddev: 0.00024537824130148875",
            "extra": "mean: 664.9686404962258 usec\nrounds: 1452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.88194815513981,
            "unit": "iter/sec",
            "range": "stddev: 0.002081280141274388",
            "extra": "mean: 25.718875916658764 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8515710.507043203,
            "unit": "iter/sec",
            "range": "stddev: 1.1766692433864314e-7",
            "extra": "mean: 117.43001352301171 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 544.2684893409358,
            "unit": "iter/sec",
            "range": "stddev: 0.00021265798221473963",
            "extra": "mean: 1.8373284869218085 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.73309428795886,
            "unit": "iter/sec",
            "range": "stddev: 0.001405645167373261",
            "extra": "mean: 13.748899449277966 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.8557363764115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007496866791609219",
            "extra": "mean: 5.409623848316805 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 384.61404232842756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740858313347907",
            "extra": "mean: 2.600009073891497 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1497.973982150581,
            "unit": "iter/sec",
            "range": "stddev: 0.00015724192256988062",
            "extra": "mean: 667.5683369108589 usec\nrounds: 932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 70.16619225159249,
            "unit": "iter/sec",
            "range": "stddev: 0.0018208102025546928",
            "extra": "mean: 14.251877833335099 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 132.14654708654314,
            "unit": "iter/sec",
            "range": "stddev: 0.019686841102749316",
            "extra": "mean: 7.567356257482061 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.91126002050066,
            "unit": "iter/sec",
            "range": "stddev: 0.0013522404431728055",
            "extra": "mean: 13.906028064518926 msec\nrounds: 62"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "e499c7fcbcc2ed96e99657f16a39dfaee8ee41b7",
          "message": "fix(mysql): ensure enum string functions are coerced to the correct type",
          "timestamp": "2023-05-22T13:57:58+02:00",
          "tree_id": "7795a9110b8a7941de53eb05d325fab401e6ea0c",
          "url": "https://github.com/ibis-project/ibis/commit/e499c7fcbcc2ed96e99657f16a39dfaee8ee41b7"
        },
        "date": 1684757284690,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12033.082030997988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025557321952396035",
            "extra": "mean: 83.10422861108535 usec\nrounds: 5061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.74418741602322,
            "unit": "iter/sec",
            "range": "stddev: 0.011640902888751263",
            "extra": "mean: 13.202333196968935 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.20637701525365,
            "unit": "iter/sec",
            "range": "stddev: 0.00011732523571745352",
            "extra": "mean: 14.043686000002253 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1650795.4660442742,
            "unit": "iter/sec",
            "range": "stddev: 1.171218411729549e-7",
            "extra": "mean: 605.7685646522003 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5051568.456636725,
            "unit": "iter/sec",
            "range": "stddev: 1.8788517344236035e-8",
            "extra": "mean: 197.9583190020507 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1011.0789538063572,
            "unit": "iter/sec",
            "range": "stddev: 0.000014027958887698488",
            "extra": "mean: 989.0424444454623 usec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.902855496980475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175225383611526",
            "extra": "mean: 50.24404664706093 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1656374.2995337953,
            "unit": "iter/sec",
            "range": "stddev: 1.4658339083816803e-7",
            "extra": "mean: 603.7282758380524 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.19806671033425,
            "unit": "iter/sec",
            "range": "stddev: 0.009248707965833035",
            "extra": "mean: 4.849705993629871 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144299.43709361763,
            "unit": "iter/sec",
            "range": "stddev: 6.140382123447514e-7",
            "extra": "mean: 6.930033963689176 usec\nrounds: 32152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.67069715368989,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111102923788957",
            "extra": "mean: 11.277682843371966 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.70340388724895,
            "unit": "iter/sec",
            "range": "stddev: 0.0010927876333109061",
            "extra": "mean: 11.946945447368313 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 452.00946664013435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000373302125080423",
            "extra": "mean: 2.212343045452511 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.27842363029279,
            "unit": "iter/sec",
            "range": "stddev: 0.00013920588834706504",
            "extra": "mean: 9.235450300000789 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.36566430130368,
            "unit": "iter/sec",
            "range": "stddev: 0.0010575447020708141",
            "extra": "mean: 11.714311698793027 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7713539147101812,
            "unit": "iter/sec",
            "range": "stddev: 0.01525420652309531",
            "extra": "mean: 1.2964217603999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3742642.9579129573,
            "unit": "iter/sec",
            "range": "stddev: 3.089596455293738e-8",
            "extra": "mean: 267.19086251225343 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.46967832337316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009801203639740969",
            "extra": "mean: 11.176971000003684 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1488711025729743,
            "unit": "iter/sec",
            "range": "stddev: 0.001186003138490947",
            "extra": "mean: 870.419664800022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5902261.4512014035,
            "unit": "iter/sec",
            "range": "stddev: 8.476900504636698e-9",
            "extra": "mean: 169.42658475365067 nsec\nrounds: 50500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1763.352321163127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018730012339318616",
            "extra": "mean: 567.1016438396093 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3753.15975475199,
            "unit": "iter/sec",
            "range": "stddev: 0.0000368413420019929",
            "extra": "mean: 266.4421621631932 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 705.7379437639165,
            "unit": "iter/sec",
            "range": "stddev: 0.010963995299420723",
            "extra": "mean: 1.4169565471663517 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5179087.2905293135,
            "unit": "iter/sec",
            "range": "stddev: 9.977593661577965e-9",
            "extra": "mean: 193.084214245332 nsec\nrounds: 52351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1812.4392539143682,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112498883840198",
            "extra": "mean: 551.7426296303593 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.98334103799017,
            "unit": "iter/sec",
            "range": "stddev: 0.0008215785258819619",
            "extra": "mean: 11.113168153845375 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.784019677322,
            "unit": "iter/sec",
            "range": "stddev: 0.0009561190667110648",
            "extra": "mean: 21.841682033334564 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.75253254193889,
            "unit": "iter/sec",
            "range": "stddev: 0.017541191530394372",
            "extra": "mean: 13.37747319047637 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8670.519962614248,
            "unit": "iter/sec",
            "range": "stddev: 0.000005085582277759507",
            "extra": "mean: 115.33333690618598 usec\nrounds: 4292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1439706.150474878,
            "unit": "iter/sec",
            "range": "stddev: 2.1657413213525154e-7",
            "extra": "mean: 694.5861832083973 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1862.6514036648312,
            "unit": "iter/sec",
            "range": "stddev: 0.00012567589093935355",
            "extra": "mean: 536.869109288225 usec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.352790073545522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004881704568676291",
            "extra": "mean: 136.0027948571363 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.82800552335974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191795514572053",
            "extra": "mean: 4.084500046726015 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.18687381315108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011052906076426177",
            "extra": "mean: 11.878336309523196 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.55044611436256,
            "unit": "iter/sec",
            "range": "stddev: 0.0008051761888137975",
            "extra": "mean: 13.97615324999723 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.613972965425116,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913536782790514",
            "extra": "mean: 32.664822730763575 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10619.889208042507,
            "unit": "iter/sec",
            "range": "stddev: 0.000017344617006029973",
            "extra": "mean: 94.16294091304587 usec\nrounds: 3791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 360.88657352670253,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776680314715596",
            "extra": "mean: 2.770953738255404 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.87730968121565,
            "unit": "iter/sec",
            "range": "stddev: 0.0010854968048850662",
            "extra": "mean: 12.519199807691633 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.18314504666102,
            "unit": "iter/sec",
            "range": "stddev: 0.00010190682652399169",
            "extra": "mean: 10.50606175609953 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 169.2060485989281,
            "unit": "iter/sec",
            "range": "stddev: 0.0048016403083566694",
            "extra": "mean: 5.909954214286491 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.18918054667715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068976162213643",
            "extra": "mean: 23.70275950000078 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.156051149682433,
            "unit": "iter/sec",
            "range": "stddev: 0.040605430934978905",
            "extra": "mean: 33.16084042424536 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.11859062160075,
            "unit": "iter/sec",
            "range": "stddev: 0.0012988929239995466",
            "extra": "mean: 12.031002842102106 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.29765602569036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010074828067220903",
            "extra": "mean: 12.151014358025412 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.37339013731709,
            "unit": "iter/sec",
            "range": "stddev: 0.002269519516974446",
            "extra": "mean: 728.125222999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.90764222111092,
            "unit": "iter/sec",
            "range": "stddev: 0.00025526782676876586",
            "extra": "mean: 12.514447582284044 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2063229131226967,
            "unit": "iter/sec",
            "range": "stddev: 0.0020426097014565898",
            "extra": "mean: 453.24281140001403 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.6334198410104,
            "unit": "iter/sec",
            "range": "stddev: 0.00007528491336120544",
            "extra": "mean: 7.161609313433857 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 67.47034679112633,
            "unit": "iter/sec",
            "range": "stddev: 0.020921245989424308",
            "extra": "mean: 14.821325924050528 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 639.6604749200765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001854184088760673",
            "extra": "mean: 1.563329358633495 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 82.60677637956827,
            "unit": "iter/sec",
            "range": "stddev: 0.0012129832671482325",
            "extra": "mean: 12.105544409639222 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 196.63575512008353,
            "unit": "iter/sec",
            "range": "stddev: 0.00044147632679906735",
            "extra": "mean: 5.085545095241248 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.33657413632773,
            "unit": "iter/sec",
            "range": "stddev: 0.005178886515475377",
            "extra": "mean: 8.670276601227993 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1799.7753014449129,
            "unit": "iter/sec",
            "range": "stddev: 0.00011654535978526128",
            "extra": "mean: 555.6249156198389 usec\nrounds: 877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.82706946663838,
            "unit": "iter/sec",
            "range": "stddev: 0.001033618649670902",
            "extra": "mean: 11.788689698791137 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 85.65549371930027,
            "unit": "iter/sec",
            "range": "stddev: 0.000993967151641567",
            "extra": "mean: 11.674674402987835 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.49861588153234,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686458723701828",
            "extra": "mean: 6.7340694999997135 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.62121501266304,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325389952351308",
            "extra": "mean: 10.56845444085844 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 181.2693967997225,
            "unit": "iter/sec",
            "range": "stddev: 0.01842315818754585",
            "extra": "mean: 5.516651004829354 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 887047.9705776521,
            "unit": "iter/sec",
            "range": "stddev: 3.102583193125452e-7",
            "extra": "mean: 1.127334747577172 usec\nrounds: 98991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.445645244019744,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541849426803525",
            "extra": "mean: 39.29945538461128 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 572.9212300982263,
            "unit": "iter/sec",
            "range": "stddev: 0.000032558981722811",
            "extra": "mean: 1.745440642561896 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.16042528405416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009690381000835943",
            "extra": "mean: 33.15603114285994 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.7673356600514,
            "unit": "iter/sec",
            "range": "stddev: 0.0003689678148889499",
            "extra": "mean: 7.826726563827586 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 263.5573412788874,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280974273451949",
            "extra": "mean: 3.794240733904786 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.738593165672174,
            "unit": "iter/sec",
            "range": "stddev: 0.05380912764885915",
            "extra": "mean: 1.3539253359999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.08786722426125,
            "unit": "iter/sec",
            "range": "stddev: 0.0006732844448118797",
            "extra": "mean: 26.25507997368303 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14195057861782467,
            "unit": "iter/sec",
            "range": "stddev: 0.11159559062534415",
            "extra": "mean: 7.044705345599982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1810.69625400677,
            "unit": "iter/sec",
            "range": "stddev: 0.00010506700984406248",
            "extra": "mean: 552.2737443053554 usec\nrounds: 966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6632801898997882,
            "unit": "iter/sec",
            "range": "stddev: 0.004168845330117343",
            "extra": "mean: 1.5076584756000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.09858868133386,
            "unit": "iter/sec",
            "range": "stddev: 0.00021040023603670322",
            "extra": "mean: 62.11724641176087 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7196.582837513777,
            "unit": "iter/sec",
            "range": "stddev: 0.00001567915004576905",
            "extra": "mean: 138.954837674803 usec\nrounds: 3148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.93090839738093,
            "unit": "iter/sec",
            "range": "stddev: 0.0010305986525760672",
            "extra": "mean: 11.63725624050867 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.9016856365551,
            "unit": "iter/sec",
            "range": "stddev: 0.0003879601674696555",
            "extra": "mean: 4.3308475520357375 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9719870.336159118,
            "unit": "iter/sec",
            "range": "stddev: 5.511013643407771e-9",
            "extra": "mean: 102.88203087239728 nsec\nrounds: 96136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.24972929082577,
            "unit": "iter/sec",
            "range": "stddev: 0.0010514648571714794",
            "extra": "mean: 12.461101225351062 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.76494816289457,
            "unit": "iter/sec",
            "range": "stddev: 0.00025164020723934604",
            "extra": "mean: 4.46897518226147 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 243.89041076445977,
            "unit": "iter/sec",
            "range": "stddev: 0.00034857591815168435",
            "extra": "mean: 4.100202205021347 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.56302736058043,
            "unit": "iter/sec",
            "range": "stddev: 0.0010212523295509328",
            "extra": "mean: 11.825499053338717 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.41905562934681,
            "unit": "iter/sec",
            "range": "stddev: 0.00015655842839904494",
            "extra": "mean: 5.867888401957535 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 161.36056913234955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008844634821739298",
            "extra": "mean: 6.197300898088615 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.92522166131326,
            "unit": "iter/sec",
            "range": "stddev: 0.00036976463604521055",
            "extra": "mean: 4.1506654766339715 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.27877059245284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005058805901492012",
            "extra": "mean: 4.3051717444921405 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1853.5725190474775,
            "unit": "iter/sec",
            "range": "stddev: 0.00011430685561576834",
            "extra": "mean: 539.498719215952 usec\nrounds: 1478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4599462.288051576,
            "unit": "iter/sec",
            "range": "stddev: 3.750577093760252e-8",
            "extra": "mean: 217.41671903637888 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1774.212157957096,
            "unit": "iter/sec",
            "range": "stddev: 0.00015858431793328256",
            "extra": "mean: 563.6304516994421 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.43474988189843,
            "unit": "iter/sec",
            "range": "stddev: 0.0009337301577354193",
            "extra": "mean: 11.569420879523188 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.07969917835441,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407706993641922",
            "extra": "mean: 22.182934186041834 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1672927.9382261867,
            "unit": "iter/sec",
            "range": "stddev: 2.449739875805051e-7",
            "extra": "mean: 597.7543785061685 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1508.073074098681,
            "unit": "iter/sec",
            "range": "stddev: 0.00006559682207629504",
            "extra": "mean: 663.0978413281881 usec\nrounds: 1084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1914.5915737841908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001027763332996035",
            "extra": "mean: 522.3046072554783 usec\nrounds: 1268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "31ce741cc9a7c7c890c3552e3e4f466845cf556f",
          "message": "feat(common): add support for start parameter in StringFind",
          "timestamp": "2023-05-22T07:29:34-05:00",
          "tree_id": "a12b35ed57f7c26c6f74788b3ebb09b8c0c72af3",
          "url": "https://github.com/ibis-project/ibis/commit/31ce741cc9a7c7c890c3552e3e4f466845cf556f"
        },
        "date": 1684759111682,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.4663428183278,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735467796715203",
            "extra": "mean: 851.4505384635657 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1307.2618883808052,
            "unit": "iter/sec",
            "range": "stddev: 0.004481552932855913",
            "extra": "mean: 764.9576637154285 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2117.3472427814663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000813653406988068",
            "extra": "mean: 472.28908881584476 usec\nrounds: 1520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148404.26630043433,
            "unit": "iter/sec",
            "range": "stddev: 3.369243207990058e-7",
            "extra": "mean: 6.738350755870913 usec\nrounds: 35586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.60199663527834,
            "unit": "iter/sec",
            "range": "stddev: 0.0037175542573217634",
            "extra": "mean: 6.426652752688897 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6142849.665791782,
            "unit": "iter/sec",
            "range": "stddev: 8.351768069701477e-9",
            "extra": "mean: 162.79089582295762 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9233612132094717,
            "unit": "iter/sec",
            "range": "stddev: 0.006320777666396427",
            "extra": "mean: 1.0829997899999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.78843360201935,
            "unit": "iter/sec",
            "range": "stddev: 0.00002599785772104725",
            "extra": "mean: 5.0559073743015395 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 290.31281844299605,
            "unit": "iter/sec",
            "range": "stddev: 0.00023473973247077392",
            "extra": "mean: 3.444560269033913 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 179.4336423799687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909606534332338",
            "extra": "mean: 5.573090902777306 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.19359234034305,
            "unit": "iter/sec",
            "range": "stddev: 0.0001629784180517866",
            "extra": "mean: 9.506282443179646 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5386183.613357338,
            "unit": "iter/sec",
            "range": "stddev: 9.955453700104878e-9",
            "extra": "mean: 185.66021357293954 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11654798.043866148,
            "unit": "iter/sec",
            "range": "stddev: 3.602867786605755e-9",
            "extra": "mean: 85.80157255716934 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6258910935143809,
            "unit": "iter/sec",
            "range": "stddev: 0.0018469408885520846",
            "extra": "mean: 615.0473448000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.49937187421011,
            "unit": "iter/sec",
            "range": "stddev: 0.0009009946992791859",
            "extra": "mean: 10.050314702129254 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13872.79097577891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015278484725119074",
            "extra": "mean: 72.08354841833501 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.93909112152109,
            "unit": "iter/sec",
            "range": "stddev: 0.0008806946529747612",
            "extra": "mean: 10.0060946000004 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6055435.7997438265,
            "unit": "iter/sec",
            "range": "stddev: 9.654600500553473e-9",
            "extra": "mean: 165.14088053609655 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1633303.4960967808,
            "unit": "iter/sec",
            "range": "stddev: 2.3829584832316788e-7",
            "extra": "mean: 612.2560824670795 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.741272800327195,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319033420079397",
            "extra": "mean: 18.960482879999745 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7850217899008468,
            "unit": "iter/sec",
            "range": "stddev: 0.004503570371336976",
            "extra": "mean: 1.273849991000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.226407208857832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008430134810340938",
            "extra": "mean: 33.08365407407568 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.95229456788228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007104357610724575",
            "extra": "mean: 8.853295135133516 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.68182171037861,
            "unit": "iter/sec",
            "range": "stddev: 0.01849120065962849",
            "extra": "mean: 24.58100345454499 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.404846664606744,
            "unit": "iter/sec",
            "range": "stddev: 0.0003304314701791404",
            "extra": "mean: 19.082204483872317 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.602903967013408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639794589682634",
            "extra": "mean: 116.23981899999762 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1998258.5348866854,
            "unit": "iter/sec",
            "range": "stddev: 1.77431805798805e-7",
            "extra": "mean: 500.4357456962928 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.57930655956324,
            "unit": "iter/sec",
            "range": "stddev: 0.004223327411940904",
            "extra": "mean: 4.70412673831828 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.07685484441947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001782531154793909",
            "extra": "mean: 7.807811967390545 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.79499182466092,
            "unit": "iter/sec",
            "range": "stddev: 0.00046549867981632965",
            "extra": "mean: 21.836448924999985 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.22491811290456,
            "unit": "iter/sec",
            "range": "stddev: 0.000035192942473775575",
            "extra": "mean: 2.3740285937499106 msec\nrounds: 384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7108745.767716851,
            "unit": "iter/sec",
            "range": "stddev: 6.230781105350657e-9",
            "extra": "mean: 140.67179115357217 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.8474116252734,
            "unit": "iter/sec",
            "range": "stddev: 0.00035648217789010237",
            "extra": "mean: 3.67853419689147 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8990703348949952,
            "unit": "iter/sec",
            "range": "stddev: 0.010004299047541503",
            "extra": "mean: 1.1122600325999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.1411570236394,
            "unit": "iter/sec",
            "range": "stddev: 0.000007571441210680151",
            "extra": "mean: 563.3354823887298 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10035.516343676674,
            "unit": "iter/sec",
            "range": "stddev: 0.000002843191042493307",
            "extra": "mean: 99.64609350968719 usec\nrounds: 4684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.44975779135413,
            "unit": "iter/sec",
            "range": "stddev: 0.0009050023502019022",
            "extra": "mean: 10.587639644445328 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.765885090312,
            "unit": "iter/sec",
            "range": "stddev: 0.000023508478237184414",
            "extra": "mean: 1.835650923394769 msec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 74.44100523886254,
            "unit": "iter/sec",
            "range": "stddev: 0.015395246333252424",
            "extra": "mean: 13.43345642352962 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.455151014514,
            "unit": "iter/sec",
            "range": "stddev: 0.00008297143634452798",
            "extra": "mean: 1.456759408858827 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2077.8244473815107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008734694231191915",
            "extra": "mean: 481.2726124481821 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.06080725224821,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423726623594654",
            "extra": "mean: 27.73093771875157 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.17658095825355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243811087038657",
            "extra": "mean: 9.692121901234659 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.6777437577505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089439883830638",
            "extra": "mean: 3.5251267397768093 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2127.520338276653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009306417110660607",
            "extra": "mean: 470.0307592876062 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.86979583678794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487656431735308",
            "extra": "mean: 9.445564640000157 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.78472858192323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084858781473375",
            "extra": "mean: 9.63532895122082 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.47277811520297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550709375397319",
            "extra": "mean: 9.48111937383262 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.22612658067986,
            "unit": "iter/sec",
            "range": "stddev: 0.01919866870095037",
            "extra": "mean: 12.783452840000109 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.8236496263481,
            "unit": "iter/sec",
            "range": "stddev: 0.00025971093627932785",
            "extra": "mean: 3.4986608046859713 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.217250689470877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000820676737434488",
            "extra": "mean: 52.036579849993814 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1979450.0727566078,
            "unit": "iter/sec",
            "range": "stddev: 9.28400370060121e-8",
            "extra": "mean: 505.19081726945865 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.81685307909086,
            "unit": "iter/sec",
            "range": "stddev: 0.023990389845438567",
            "extra": "mean: 13.733084549998864 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.30561525722128,
            "unit": "iter/sec",
            "range": "stddev: 0.000033382707491772856",
            "extra": "mean: 9.0657216105282 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.6763974918112,
            "unit": "iter/sec",
            "range": "stddev: 0.00002559864042745401",
            "extra": "mean: 3.177867828571486 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.38315570422608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645755677439781",
            "extra": "mean: 5.225120237569153 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3550284231331224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006155701387851804",
            "extra": "mean: 737.9918995999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.19870762962915,
            "unit": "iter/sec",
            "range": "stddev: 0.00009282912053842866",
            "extra": "mean: 9.505820200003585 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4606.948381799159,
            "unit": "iter/sec",
            "range": "stddev: 0.000022890251706543144",
            "extra": "mean: 217.0634261826629 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 260.4072112325349,
            "unit": "iter/sec",
            "range": "stddev: 0.00039821487734616434",
            "extra": "mean: 3.8401394311121195 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1055732.4546035712,
            "unit": "iter/sec",
            "range": "stddev: 1.2784913546983913e-7",
            "extra": "mean: 947.209679535239 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.95985021569355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010237108374916606",
            "extra": "mean: 10.530766399995173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.553984795089047,
            "unit": "iter/sec",
            "range": "stddev: 0.000844363595834596",
            "extra": "mean: 40.72658708333184 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.80198365911657,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155834973821557",
            "extra": "mean: 9.920439694735705 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2153.6900671509493,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674589189693063",
            "extra": "mean: 464.31936296333924 usec\nrounds: 1755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4527529.902440402,
            "unit": "iter/sec",
            "range": "stddev: 1.2279311602769371e-8",
            "extra": "mean: 220.8709873926831 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.43237906226527,
            "unit": "iter/sec",
            "range": "stddev: 0.0008386729290670443",
            "extra": "mean: 10.057086126580485 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.46531937589427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005714360577472",
            "extra": "mean: 10.155860015874934 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16996848420842153,
            "unit": "iter/sec",
            "range": "stddev: 0.0077897172321792114",
            "extra": "mean: 5.883443655200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.15327325425645,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502948716304475",
            "extra": "mean: 9.984696131311921 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.73236531714842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791562578869503",
            "extra": "mean: 9.640192787878963 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2116.8576096458014,
            "unit": "iter/sec",
            "range": "stddev: 0.00009929980089924842",
            "extra": "mean: 472.3983301679525 usec\nrounds: 1896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.72627537847256,
            "unit": "iter/sec",
            "range": "stddev: 0.00017511348752720707",
            "extra": "mean: 3.835440055086091 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.65969731964641,
            "unit": "iter/sec",
            "range": "stddev: 0.000844224599609977",
            "extra": "mean: 10.034146469385925 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2068.4825337022357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000917922302160716",
            "extra": "mean: 483.44619000005196 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.94986456993666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853352536004269",
            "extra": "mean: 15.396490918363975 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.64980900036112,
            "unit": "iter/sec",
            "range": "stddev: 0.02005225211739167",
            "extra": "mean: 12.55495791578692 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2114.597829795171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000855463378849012",
            "extra": "mean: 472.90316196761836 usec\nrounds: 1667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12460.234196216374,
            "unit": "iter/sec",
            "range": "stddev: 0.00001585922347240497",
            "extra": "mean: 80.25531336350453 usec\nrounds: 5575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8527.782734781538,
            "unit": "iter/sec",
            "range": "stddev: 0.000014357584692827737",
            "extra": "mean: 117.26377548543603 usec\nrounds: 4895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.79188688295683,
            "unit": "iter/sec",
            "range": "stddev: 0.0012020859788096636",
            "extra": "mean: 25.13075097296549 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.42141043730726,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248375184611098",
            "extra": "mean: 9.763583568419083 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.560968778840346,
            "unit": "iter/sec",
            "range": "stddev: 0.0021589843969554603",
            "extra": "mean: 390.47723200000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.8854334706149,
            "unit": "iter/sec",
            "range": "stddev: 0.00012048160689215056",
            "extra": "mean: 6.21560310606147 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2137.6527510284204,
            "unit": "iter/sec",
            "range": "stddev: 0.00008490174262342873",
            "extra": "mean: 467.8028269647172 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.86427815457294,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110039730677003",
            "extra": "mean: 10.013590629996543 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.3886301619702,
            "unit": "iter/sec",
            "range": "stddev: 0.00018185837024451695",
            "extra": "mean: 6.046364849994035 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.5525359051354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414427462035256",
            "extra": "mean: 1.359522197512987 msec\nrounds: 643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.07198995210683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456104715659186",
            "extra": "mean: 3.758381331984629 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2003571.7791775481,
            "unit": "iter/sec",
            "range": "stddev: 1.0354626657000015e-7",
            "extra": "mean: 499.10864706354215 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.83921195456674,
            "unit": "iter/sec",
            "range": "stddev: 0.0002796273504969209",
            "extra": "mean: 3.586296177608396 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.156341904781,
            "unit": "iter/sec",
            "range": "stddev: 0.00029583041771350194",
            "extra": "mean: 4.2344829358984715 msec\nrounds: 234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "4f3a4cda10ac02b4cd9093f82a63be1f0b70b55e",
          "message": "refactor(trino): always clean up prepared statements created when accessing query metadata",
          "timestamp": "2023-05-22T14:42:02+02:00",
          "tree_id": "fed53f563e11fca009613e0831ece31ae6a71941",
          "url": "https://github.com/ibis-project/ibis/commit/4f3a4cda10ac02b4cd9093f82a63be1f0b70b55e"
        },
        "date": 1684760272290,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10037.52408690167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037287550005283804",
            "extra": "mean: 99.62616192422753 usec\nrounds: 2495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048218.7520194376,
            "unit": "iter/sec",
            "range": "stddev: 2.058691774036152e-7",
            "extra": "mean: 953.9993422875309 nsec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.76058025446851,
            "unit": "iter/sec",
            "range": "stddev: 0.0009959177622467863",
            "extra": "mean: 10.125497414285942 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5573585.046024,
            "unit": "iter/sec",
            "range": "stddev: 1.3563409666707475e-8",
            "extra": "mean: 179.41773414111285 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.08684608573265,
            "unit": "iter/sec",
            "range": "stddev: 0.00006874465748937446",
            "extra": "mean: 5.615237857144097 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2031.5274780997086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008306087140748412",
            "extra": "mean: 492.2404499964727 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.3255757726912,
            "unit": "iter/sec",
            "range": "stddev: 0.00043624771093642205",
            "extra": "mean: 3.9789026521695496 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.12435107010353,
            "unit": "iter/sec",
            "range": "stddev: 0.02236486412976062",
            "extra": "mean: 13.136400980010876 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2157.36085819801,
            "unit": "iter/sec",
            "range": "stddev: 0.00011279742790305267",
            "extra": "mean: 463.5293146253126 usec\nrounds: 1764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2092.6097041803846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054202628364749",
            "extra": "mean: 477.8721985290953 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.39490339510825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142000677764772",
            "extra": "mean: 24.157563322594267 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1934312.8061339941,
            "unit": "iter/sec",
            "range": "stddev: 1.6066116093254099e-7",
            "extra": "mean: 516.9794651769098 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.35618491145978,
            "unit": "iter/sec",
            "range": "stddev: 0.0012023252965699836",
            "extra": "mean: 10.827645175671583 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.53051144936213,
            "unit": "iter/sec",
            "range": "stddev: 0.00015721453566893754",
            "extra": "mean: 21.49127462500111 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.04214984353403,
            "unit": "iter/sec",
            "range": "stddev: 0.00017614080193975156",
            "extra": "mean: 8.19389040001397 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2143.4929398517315,
            "unit": "iter/sec",
            "range": "stddev: 0.00014252584442834085",
            "extra": "mean: 466.52824528042134 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.29635084043949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011215961433815422",
            "extra": "mean: 10.277877755558821 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.35173130371708,
            "unit": "iter/sec",
            "range": "stddev: 0.0007494267538332234",
            "extra": "mean: 22.54703414286312 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 527.782633031583,
            "unit": "iter/sec",
            "range": "stddev: 0.00010001692349631777",
            "extra": "mean: 1.8947194117699568 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.3018695932796,
            "unit": "iter/sec",
            "range": "stddev: 0.00012024335365134612",
            "extra": "mean: 3.4211207796632968 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.87826990688836,
            "unit": "iter/sec",
            "range": "stddev: 0.00044939369394906436",
            "extra": "mean: 3.6646377168149753 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.02592303781068,
            "unit": "iter/sec",
            "range": "stddev: 0.03654359309307519",
            "extra": "mean: 10.749691777780551 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.96999334809318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856501440618208",
            "extra": "mean: 9.261832560978485 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.19051192242115,
            "unit": "iter/sec",
            "range": "stddev: 0.0012036507116187987",
            "extra": "mean: 10.505248682925302 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3189787104055064,
            "unit": "iter/sec",
            "range": "stddev: 0.002539841919205116",
            "extra": "mean: 758.16235100001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.641179879237804,
            "unit": "iter/sec",
            "range": "stddev: 0.000521081576653669",
            "extra": "mean: 25.226292533329797 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.46726165513905,
            "unit": "iter/sec",
            "range": "stddev: 0.00038785331644164997",
            "extra": "mean: 3.6701657069747218 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 72.77799760955604,
            "unit": "iter/sec",
            "range": "stddev: 0.03017898217749399",
            "extra": "mean: 13.740416511111814 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.899949848700064,
            "unit": "iter/sec",
            "range": "stddev: 0.0013550695002278177",
            "extra": "mean: 40.160723458332846 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.45605998784754,
            "unit": "iter/sec",
            "range": "stddev: 0.00041090922579449914",
            "extra": "mean: 3.6703166009396284 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4502136.482099175,
            "unit": "iter/sec",
            "range": "stddev: 1.6722369248411858e-8",
            "extra": "mean: 222.11676700053533 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7177935.329284803,
            "unit": "iter/sec",
            "range": "stddev: 6.323325020492113e-9",
            "extra": "mean: 139.31582748045506 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6010125.305353203,
            "unit": "iter/sec",
            "range": "stddev: 1.7567790311224378e-8",
            "extra": "mean: 166.38588202269906 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.6499615502078,
            "unit": "iter/sec",
            "range": "stddev: 0.0003321434733101178",
            "extra": "mean: 2.382938381087777 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.17776295373103,
            "unit": "iter/sec",
            "range": "stddev: 0.0012293308779555995",
            "extra": "mean: 10.397413802201635 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2221.4254279543907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008497315624539505",
            "extra": "mean: 450.16140871352786 usec\nrounds: 964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.84576556190778,
            "unit": "iter/sec",
            "range": "stddev: 0.0011220655561850852",
            "extra": "mean: 10.015447268817482 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.4391535565256,
            "unit": "iter/sec",
            "range": "stddev: 0.0014195848342339048",
            "extra": "mean: 10.702151741936046 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1922480.5728763372,
            "unit": "iter/sec",
            "range": "stddev: 1.477939914529267e-7",
            "extra": "mean: 520.1613031146737 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148331.59185399703,
            "unit": "iter/sec",
            "range": "stddev: 4.728441684611157e-7",
            "extra": "mean: 6.7416521827952955 usec\nrounds: 29941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6174794.46157117,
            "unit": "iter/sec",
            "range": "stddev: 8.458407510609636e-9",
            "extra": "mean: 161.94871039408784 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8787950234713088,
            "unit": "iter/sec",
            "range": "stddev: 0.008883805069090528",
            "extra": "mean: 1.1379217830000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.48010558434065,
            "unit": "iter/sec",
            "range": "stddev: 0.00012503141749051504",
            "extra": "mean: 9.663693270828352 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.78043314537304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003989797226391548",
            "extra": "mean: 15.67878972726207 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.577021046354172,
            "unit": "iter/sec",
            "range": "stddev: 0.0012192191708707133",
            "extra": "mean: 56.89246188889444 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2086.3185370747574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001609472215581407",
            "extra": "mean: 479.31319318195165 usec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.22825529187233,
            "unit": "iter/sec",
            "range": "stddev: 0.00011758650727253083",
            "extra": "mean: 6.164154315787061 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.46031871089022,
            "unit": "iter/sec",
            "range": "stddev: 0.0012750403082475198",
            "extra": "mean: 10.586455917649907 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.3978079001029,
            "unit": "iter/sec",
            "range": "stddev: 0.000014454972904417893",
            "extra": "mean: 850.7757912076947 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14135.986123387913,
            "unit": "iter/sec",
            "range": "stddev: 0.000002747729898508444",
            "extra": "mean: 70.7414389962866 usec\nrounds: 6057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 95.87798204290947,
            "unit": "iter/sec",
            "range": "stddev: 0.0012137392055923658",
            "extra": "mean: 10.429923311824163 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.28536239067341,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345859882913628",
            "extra": "mean: 8.045999792450553 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.07205783305923,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503195472150946",
            "extra": "mean: 11.754740927536343 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.6110175257097,
            "unit": "iter/sec",
            "range": "stddev: 0.000022344144079050155",
            "extra": "mean: 1.3340252165726776 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 259.3445008534835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999657356685606",
            "extra": "mean: 3.8558750878043457 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1751.8247265336454,
            "unit": "iter/sec",
            "range": "stddev: 0.000012138100087616263",
            "extra": "mean: 570.8333629807308 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5639590472080869,
            "unit": "iter/sec",
            "range": "stddev: 0.003122245028390697",
            "extra": "mean: 639.4029318000094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2105.719327324195,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610385744988846",
            "extra": "mean: 474.8970990691015 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7639080509069702,
            "unit": "iter/sec",
            "range": "stddev: 0.0038931619991793773",
            "extra": "mean: 1.309058071600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1900458.576511343,
            "unit": "iter/sec",
            "range": "stddev: 1.348253921450623e-7",
            "extra": "mean: 526.1887906210995 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 180.05577102683586,
            "unit": "iter/sec",
            "range": "stddev: 0.004596652740776193",
            "extra": "mean: 5.553834760736206 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.66359308125755,
            "unit": "iter/sec",
            "range": "stddev: 0.005040455767509706",
            "extra": "mean: 8.571654391816034 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.5917496853696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003744362382133133",
            "extra": "mean: 3.7794073367333496 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4517.034892625219,
            "unit": "iter/sec",
            "range": "stddev: 0.00007300979056894677",
            "extra": "mean: 221.3841654472627 usec\nrounds: 683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 89.85838675490474,
            "unit": "iter/sec",
            "range": "stddev: 0.0012492381202974397",
            "extra": "mean: 11.12862178048636 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.11939535940077,
            "unit": "iter/sec",
            "range": "stddev: 0.0014765364244331716",
            "extra": "mean: 11.096390471906172 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 184.17116217394246,
            "unit": "iter/sec",
            "range": "stddev: 0.025876320603537135",
            "extra": "mean: 5.429731713673713 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12373.749902482572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156873768536662",
            "extra": "mean: 80.81624470196928 usec\nrounds: 4152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 89.67517870022388,
            "unit": "iter/sec",
            "range": "stddev: 0.0013542086285403241",
            "extra": "mean: 11.151357761359034 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.91186206666075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282922948219755",
            "extra": "mean: 5.13052407071046 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.55541646323165,
            "unit": "iter/sec",
            "range": "stddev: 0.0013996268750697321",
            "extra": "mean: 11.292364035295362 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.961458692565007,
            "unit": "iter/sec",
            "range": "stddev: 0.00020269505181653993",
            "extra": "mean: 52.73855857894049 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2126.1152164818236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001019113888461527",
            "extra": "mean: 470.34139648120487 usec\nrounds: 966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 28.690317743126794,
            "unit": "iter/sec",
            "range": "stddev: 0.0011661374054574621",
            "extra": "mean: 34.85496427586848 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1729444.0529360003,
            "unit": "iter/sec",
            "range": "stddev: 1.2728841546109783e-7",
            "extra": "mean: 578.2204971027219 nsec\nrounds: 66663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 67.46020200050918,
            "unit": "iter/sec",
            "range": "stddev: 0.04099494622259219",
            "extra": "mean: 14.823554782602814 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8631949178610591,
            "unit": "iter/sec",
            "range": "stddev: 0.018694129663923326",
            "extra": "mean: 1.1584868948000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 80.66345574555402,
            "unit": "iter/sec",
            "range": "stddev: 0.0010382990839167214",
            "extra": "mean: 12.397187682541329 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2113.0510187318314,
            "unit": "iter/sec",
            "range": "stddev: 0.00011374292919813498",
            "extra": "mean: 473.24933999944784 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.57483428110443,
            "unit": "iter/sec",
            "range": "stddev: 0.0010739301533838274",
            "extra": "mean: 29.784212533337495 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.708158164541096,
            "unit": "iter/sec",
            "range": "stddev: 0.0020343536161223853",
            "extra": "mean: 25.83434726470808 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.405139532661995,
            "unit": "iter/sec",
            "range": "stddev: 0.0017466683388228529",
            "extra": "mean: 415.77629339999476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 221.60383133611631,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958702720226596",
            "extra": "mean: 4.512557359548788 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.394644615201319,
            "unit": "iter/sec",
            "range": "stddev: 0.00041875284239395775",
            "extra": "mean: 119.12356577777751 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 265.2840680040174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137833787934108",
            "extra": "mean: 3.769544124997571 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8354.85320462841,
            "unit": "iter/sec",
            "range": "stddev: 0.00001492302328948203",
            "extra": "mean: 119.69091203733194 usec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15808121210898524,
            "unit": "iter/sec",
            "range": "stddev: 0.1508981871132304",
            "extra": "mean: 6.32586242640001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10939710.89184567,
            "unit": "iter/sec",
            "range": "stddev: 6.050393370133377e-9",
            "extra": "mean: 91.41009391272988 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 660.3674081454615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005848892052128066",
            "extra": "mean: 1.5143085313800442 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.07224259346148,
            "unit": "iter/sec",
            "range": "stddev: 0.0012810836035447586",
            "extra": "mean: 10.980294011907805 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.7330634439147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002321945588201015",
            "extra": "mean: 9.113023628572137 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.55512150091494,
            "unit": "iter/sec",
            "range": "stddev: 0.0011862467257699322",
            "extra": "mean: 10.804372397589201 msec\nrounds: 83"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "ad49a099b0feeedc673c7ff1b0a4ba0ef43a1ae1",
          "message": "feat(duckdb): expand map support to `.values()` and map concatenation",
          "timestamp": "2023-05-22T15:30:44+02:00",
          "tree_id": "49da36bd226824796aebe488ef2e13a211737b29",
          "url": "https://github.com/ibis-project/ibis/commit/ad49a099b0feeedc673c7ff1b0a4ba0ef43a1ae1"
        },
        "date": 1684763943785,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.9470638086585,
            "unit": "iter/sec",
            "range": "stddev: 0.00013380329351996186",
            "extra": "mean: 6.669020216868403 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.51012503456451,
            "unit": "iter/sec",
            "range": "stddev: 0.0009551172161840414",
            "extra": "mean: 12.57701455714328 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6694350563426279,
            "unit": "iter/sec",
            "range": "stddev: 0.006034477277814289",
            "extra": "mean: 1.4937968822000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1748.515995626544,
            "unit": "iter/sec",
            "range": "stddev: 0.00008142480833409206",
            "extra": "mean: 571.9135555529596 usec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.52701343825949,
            "unit": "iter/sec",
            "range": "stddev: 0.000931171412201465",
            "extra": "mean: 11.97217473529289 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.71938317881619,
            "unit": "iter/sec",
            "range": "stddev: 0.0008636653031641342",
            "extra": "mean: 11.66597288636498 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 67.91101814616295,
            "unit": "iter/sec",
            "range": "stddev: 0.017879451892320854",
            "extra": "mean: 14.725151047621292 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1832.6263135808188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001468978350151351",
            "extra": "mean: 545.6649795920874 usec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 83.37830504950782,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466389989851337",
            "extra": "mean: 11.993527565788566 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.75848580674293,
            "unit": "iter/sec",
            "range": "stddev: 0.0003669557012144666",
            "extra": "mean: 4.170863845069696 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1831.6987022631572,
            "unit": "iter/sec",
            "range": "stddev: 0.00013115310036440348",
            "extra": "mean: 545.9413159841457 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.89531982940048,
            "unit": "iter/sec",
            "range": "stddev: 0.00039421690679295444",
            "extra": "mean: 7.818894399997589 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.07448995182799,
            "unit": "iter/sec",
            "range": "stddev: 0.0001069346003685388",
            "extra": "mean: 11.101922425925496 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1484.1357080614262,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855494449089877",
            "extra": "mean: 673.7928307824337 usec\nrounds: 1176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.22845997631575,
            "unit": "iter/sec",
            "range": "stddev: 0.0009028127385933375",
            "extra": "mean: 11.733169885715304 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7660244087246292,
            "unit": "iter/sec",
            "range": "stddev: 0.005383856171416395",
            "extra": "mean: 1.3054414306000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 72.35762524730553,
            "unit": "iter/sec",
            "range": "stddev: 0.0007428193316853392",
            "extra": "mean: 13.820243500006768 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1828.1881675661418,
            "unit": "iter/sec",
            "range": "stddev: 0.0001427584815533409",
            "extra": "mean: 546.9896467666648 usec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.32043631152708,
            "unit": "iter/sec",
            "range": "stddev: 0.000087633774640023",
            "extra": "mean: 9.317889810820606 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1623972.6441893596,
            "unit": "iter/sec",
            "range": "stddev: 2.0362080462376176e-7",
            "extra": "mean: 615.773919331733 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1762.7930963084218,
            "unit": "iter/sec",
            "range": "stddev: 0.00025138428986510127",
            "extra": "mean: 567.2815499982183 usec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1822.292129273251,
            "unit": "iter/sec",
            "range": "stddev: 0.00009892521469242602",
            "extra": "mean: 548.7594354033732 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 263.85852878276916,
            "unit": "iter/sec",
            "range": "stddev: 0.000036912597783245696",
            "extra": "mean: 3.7899097088625298 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3822.8215632358088,
            "unit": "iter/sec",
            "range": "stddev: 0.000028350525159499906",
            "extra": "mean: 261.58688901858 usec\nrounds: 856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1494.4397238925717,
            "unit": "iter/sec",
            "range": "stddev: 0.0038618660923849146",
            "extra": "mean: 669.1470950700486 usec\nrounds: 1136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1820.9704482684294,
            "unit": "iter/sec",
            "range": "stddev: 0.00009968049437153509",
            "extra": "mean: 549.157731225625 usec\nrounds: 1012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 453.08202513499543,
            "unit": "iter/sec",
            "range": "stddev: 0.000028881406920112054",
            "extra": "mean: 2.207105876032162 msec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8646.81982288873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024724096406950147",
            "extra": "mean: 115.64945499996782 usec\nrounds: 4000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3705102.542448027,
            "unit": "iter/sec",
            "range": "stddev: 1.7139009157460174e-8",
            "extra": "mean: 269.89806315574145 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.153772197580828,
            "unit": "iter/sec",
            "range": "stddev: 0.0011691292033956225",
            "extra": "mean: 866.7222195999784 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.581484674556215,
            "unit": "iter/sec",
            "range": "stddev: 0.0007743109089046377",
            "extra": "mean: 32.69952425926527 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.841167844818404,
            "unit": "iter/sec",
            "range": "stddev: 0.00013477862393501306",
            "extra": "mean: 38.69794144000025 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143226.8710223995,
            "unit": "iter/sec",
            "range": "stddev: 4.190261942533784e-7",
            "extra": "mean: 6.981930086593935 usec\nrounds: 34128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 162.68768361759535,
            "unit": "iter/sec",
            "range": "stddev: 0.005050984379341187",
            "extra": "mean: 6.146746808139112 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9766.536379711557,
            "unit": "iter/sec",
            "range": "stddev: 0.00010683285246267422",
            "extra": "mean: 102.39044438285642 usec\nrounds: 3641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 235.43774308849487,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337505795865056",
            "extra": "mean: 4.247407348039886 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1571131.0591830127,
            "unit": "iter/sec",
            "range": "stddev: 1.1022641080859172e-7",
            "extra": "mean: 636.4841393435372 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.70489961332868,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993924132795196",
            "extra": "mean: 12.70568928888704 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 68.9689043809168,
            "unit": "iter/sec",
            "range": "stddev: 0.021861569426740193",
            "extra": "mean: 14.499287888886528 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 872010.0729058156,
            "unit": "iter/sec",
            "range": "stddev: 1.514955941707161e-7",
            "extra": "mean: 1.146775743848556 usec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 85.98801001580978,
            "unit": "iter/sec",
            "range": "stddev: 0.0009275847876387488",
            "extra": "mean: 11.629528347221196 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.6642043899609,
            "unit": "iter/sec",
            "range": "stddev: 0.00027849183126171545",
            "extra": "mean: 4.087234593607074 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.17198690287489,
            "unit": "iter/sec",
            "range": "stddev: 0.00019216262978114068",
            "extra": "mean: 11.471575164555764 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.9397099005908,
            "unit": "iter/sec",
            "range": "stddev: 0.00032554968249799677",
            "extra": "mean: 4.2204829254646885 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 978.1783142235505,
            "unit": "iter/sec",
            "range": "stddev: 0.000012994423063293255",
            "extra": "mean: 1.0223084947387848 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 70.9000562128125,
            "unit": "iter/sec",
            "range": "stddev: 0.018613751031585878",
            "extra": "mean: 14.104361172837658 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9135356.3176598,
            "unit": "iter/sec",
            "range": "stddev: 4.469562144848781e-9",
            "extra": "mean: 109.46480522784785 nsec\nrounds: 90901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.58088822460351,
            "unit": "iter/sec",
            "range": "stddev: 0.000056922138669461366",
            "extra": "mean: 10.462342614457832 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5188096.689063603,
            "unit": "iter/sec",
            "range": "stddev: 6.725490421250907e-9",
            "extra": "mean: 192.7489135096117 nsec\nrounds: 51809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 214.9020592957433,
            "unit": "iter/sec",
            "range": "stddev: 0.000627240472206332",
            "extra": "mean: 4.653282538460103 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1591949.385838294,
            "unit": "iter/sec",
            "range": "stddev: 1.792157879064688e-7",
            "extra": "mean: 628.1606745137923 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.0881458496668,
            "unit": "iter/sec",
            "range": "stddev: 0.0011299342912628697",
            "extra": "mean: 12.182026888892862 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.35723668710699,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215716303114195",
            "extra": "mean: 25.408287882355044 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4526990.7490195455,
            "unit": "iter/sec",
            "range": "stddev: 1.307555872518542e-8",
            "extra": "mean: 220.89729258168694 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.34154072768254,
            "unit": "iter/sec",
            "range": "stddev: 0.00020775678944803786",
            "extra": "mean: 136.2111901428713 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 202.31525350974496,
            "unit": "iter/sec",
            "range": "stddev: 0.00035343844945299617",
            "extra": "mean: 4.942781044197603 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 67.5983339444389,
            "unit": "iter/sec",
            "range": "stddev: 0.025626086143415088",
            "extra": "mean: 14.793263999996359 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.73934440857907,
            "unit": "iter/sec",
            "range": "stddev: 0.0013245798204651524",
            "extra": "mean: 20.517305108108527 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.95299993938989,
            "unit": "iter/sec",
            "range": "stddev: 0.0004902774542916703",
            "extra": "mean: 23.28126094594277 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1433580.9175093716,
            "unit": "iter/sec",
            "range": "stddev: 1.2764826438134496e-7",
            "extra": "mean: 697.5539279201257 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.89617200607447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433605500313195",
            "extra": "mean: 21.78830948837405 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5859356.437920112,
            "unit": "iter/sec",
            "range": "stddev: 7.013204524571446e-9",
            "extra": "mean: 170.6672073281213 nsec\nrounds: 50500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.39872361693096,
            "unit": "iter/sec",
            "range": "stddev: 0.0011633860546128262",
            "extra": "mean: 29.94126396773635 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12016.763343310568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018319389417273704",
            "extra": "mean: 83.21708362149573 usec\nrounds: 5214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 194.44406258859536,
            "unit": "iter/sec",
            "range": "stddev: 0.012455543538080278",
            "extra": "mean: 5.142867242574536 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.2749621145581,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987353076450866",
            "extra": "mean: 7.078395102941967 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.15813712631768,
            "unit": "iter/sec",
            "range": "stddev: 0.00003113431376152718",
            "extra": "mean: 5.842550151512707 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1785451998365,
            "unit": "iter/sec",
            "range": "stddev: 0.001963654986127578",
            "extra": "mean: 459.0219197999886 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.478731483843536,
            "unit": "iter/sec",
            "range": "stddev: 0.00010927811302718609",
            "extra": "mean: 60.68428270588931 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 122.00373098207483,
            "unit": "iter/sec",
            "range": "stddev: 0.005476988021560094",
            "extra": "mean: 8.19647064848306 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.43595283670162,
            "unit": "iter/sec",
            "range": "stddev: 0.0010454315140224215",
            "extra": "mean: 12.588758166666972 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7247.98833306037,
            "unit": "iter/sec",
            "range": "stddev: 0.00003866169339286009",
            "extra": "mean: 137.96931700878756 usec\nrounds: 3798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 360.0843919968706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003901477834656282",
            "extra": "mean: 2.7771267575760152 msec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.38307530158588,
            "unit": "iter/sec",
            "range": "stddev: 0.0008735597890837251",
            "extra": "mean: 11.187800337210568 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14391833756906014,
            "unit": "iter/sec",
            "range": "stddev: 0.004866620965107599",
            "extra": "mean: 6.948384874999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.996713377455638,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036645162743529",
            "extra": "mean: 47.626501444445545 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 640.0625660927614,
            "unit": "iter/sec",
            "range": "stddev: 0.000014008331609437706",
            "extra": "mean: 1.5623472656813278 msec\nrounds: 542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.53740052511125,
            "unit": "iter/sec",
            "range": "stddev: 0.0008923443874053986",
            "extra": "mean: 11.690792493821807 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.26214662930784,
            "unit": "iter/sec",
            "range": "stddev: 0.0009661374119375",
            "extra": "mean: 11.459722670449873 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 64.9646927180933,
            "unit": "iter/sec",
            "range": "stddev: 0.023679661451301823",
            "extra": "mean: 15.392976679492403 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 244.6377865112516,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434071378910388",
            "extra": "mean: 4.0876759647839895 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.963048546258875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005451202646773",
            "extra": "mean: 25.665342864862076 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.7802346635434,
            "unit": "iter/sec",
            "range": "stddev: 0.0008939744272067893",
            "extra": "mean: 11.138309047058717 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1819.9818236547603,
            "unit": "iter/sec",
            "range": "stddev: 0.00010282718669788806",
            "extra": "mean: 549.4560368695714 usec\nrounds: 1546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 161.53082556810065,
            "unit": "iter/sec",
            "range": "stddev: 0.00007263732554580971",
            "extra": "mean: 6.1907688299308825 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.69193957602981,
            "unit": "iter/sec",
            "range": "stddev: 0.0008976815569459885",
            "extra": "mean: 11.403556641976083 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.374478418462019,
            "unit": "iter/sec",
            "range": "stddev: 0.0028493185187245707",
            "extra": "mean: 727.5487098000099 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 579.208566957088,
            "unit": "iter/sec",
            "range": "stddev: 0.000029293401212760415",
            "extra": "mean: 1.726493800417298 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7683821680825398,
            "unit": "iter/sec",
            "range": "stddev: 0.006887601810638375",
            "extra": "mean: 1.3014357198000197 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.17599391551997,
            "unit": "iter/sec",
            "range": "stddev: 0.00044098335798289635",
            "extra": "mean: 4.307077502439214 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.66619343198603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009634032852775779",
            "extra": "mean: 10.453013380436747 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4980913.503855275,
            "unit": "iter/sec",
            "range": "stddev: 1.921957808781564e-8",
            "extra": "mean: 200.76638536817188 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2cb19ec5ab05d81ba4701f490ad62002fffe3d6a",
          "message": "refactor(api): remove automatic `count` name from relations\n\nBREAKING CHANGE: `Table.count()` is no longer automatically named `\"count\"`. Use `Table.count().name(\"count\")` to achieve the previous behavior.",
          "timestamp": "2023-05-22T09:16:27-05:00",
          "tree_id": "1eca45f9098529f620d748b159ad56a921d6904a",
          "url": "https://github.com/ibis-project/ibis/commit/2cb19ec5ab05d81ba4701f490ad62002fffe3d6a"
        },
        "date": 1684766248064,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.38231407138319,
            "unit": "iter/sec",
            "range": "stddev: 0.00874490572151293",
            "extra": "mean: 10.595205360653486 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.3898996402354,
            "unit": "iter/sec",
            "range": "stddev: 0.00005918529816171749",
            "extra": "mean: 1.480626228690534 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.46838131893699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007802819069304292",
            "extra": "mean: 9.953380226416696 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6603.785448008895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000718819377444443",
            "extra": "mean: 151.42829940083982 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 85.59196708065335,
            "unit": "iter/sec",
            "range": "stddev: 0.011500094645364417",
            "extra": "mean: 11.683339384614207 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 273.5477826926064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003120772165815005",
            "extra": "mean: 3.655668454544664 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.16674582887076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005259316636898968",
            "extra": "mean: 41.37917479999942 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148139.2858616588,
            "unit": "iter/sec",
            "range": "stddev: 3.268479841424822e-7",
            "extra": "mean: 6.750403812084384 usec\nrounds: 37879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.4312835619704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004815940206781819",
            "extra": "mean: 3.18034512556036 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.941044803710323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007283441873049783",
            "extra": "mean: 52.79539805555563 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.9284299869139,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220675539017919",
            "extra": "mean: 9.622006222223453 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.31833645683264,
            "unit": "iter/sec",
            "range": "stddev: 0.00017069279350510552",
            "extra": "mean: 5.282108530612484 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4482305.053757596,
            "unit": "iter/sec",
            "range": "stddev: 1.301076863602219e-8",
            "extra": "mean: 223.0994963546804 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.56249800561552,
            "unit": "iter/sec",
            "range": "stddev: 0.012627112576962522",
            "extra": "mean: 10.688042979998045 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.47402230776039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608328375138879",
            "extra": "mean: 11.699461111112441 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.84255347573134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993855004320844",
            "extra": "mean: 3.6651174359022685 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.29278274065921,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033649101497416",
            "extra": "mean: 18.41865436842146 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5488802.514590857,
            "unit": "iter/sec",
            "range": "stddev: 9.712014363937916e-9",
            "extra": "mean: 182.1891017832925 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1023720.8936415282,
            "unit": "iter/sec",
            "range": "stddev: 1.1599197297560292e-7",
            "extra": "mean: 976.8287491357636 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1857976.304744721,
            "unit": "iter/sec",
            "range": "stddev: 8.797325585219482e-8",
            "extra": "mean: 538.2199963725567 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.604488980191725,
            "unit": "iter/sec",
            "range": "stddev: 0.0006668423807088561",
            "extra": "mean: 27.31905369696988 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.36237090932522,
            "unit": "iter/sec",
            "range": "stddev: 0.00009735552959110447",
            "extra": "mean: 9.061059415093661 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2126.057164585385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008141234458877127",
            "extra": "mean: 470.35423913214294 usec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 111.381182246069,
            "unit": "iter/sec",
            "range": "stddev: 0.00002386194123036147",
            "extra": "mean: 8.978177281246206 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.4777440296974,
            "unit": "iter/sec",
            "range": "stddev: 0.00037175117189995236",
            "extra": "mean: 3.883830828829463 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.57609067066177,
            "unit": "iter/sec",
            "range": "stddev: 0.0008737335908622546",
            "extra": "mean: 10.04257139705758 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.4429395130056,
            "unit": "iter/sec",
            "range": "stddev: 0.000043796705900773644",
            "extra": "mean: 6.232745442306855 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1177.0734973619683,
            "unit": "iter/sec",
            "range": "stddev: 0.00002832057011484364",
            "extra": "mean: 849.5646212757134 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.34200760108569,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449427594699444",
            "extra": "mean: 21.122889599998018 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.66410708527124,
            "unit": "iter/sec",
            "range": "stddev: 0.00023053802996665366",
            "extra": "mean: 10.23917619117628 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.3181645980784,
            "unit": "iter/sec",
            "range": "stddev: 0.000011294048706869881",
            "extra": "mean: 1.3453189328969415 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9196642063706228,
            "unit": "iter/sec",
            "range": "stddev: 0.004917286163856409",
            "extra": "mean: 1.087353398199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.54853141638742,
            "unit": "iter/sec",
            "range": "stddev: 0.011624475860795602",
            "extra": "mean: 4.2096661008067775 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1704896.2889472283,
            "unit": "iter/sec",
            "range": "stddev: 8.892403143213428e-8",
            "extra": "mean: 586.5459421097684 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5899419299536786,
            "unit": "iter/sec",
            "range": "stddev: 0.0031553586959941235",
            "extra": "mean: 386.1090430000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893212.9451419632,
            "unit": "iter/sec",
            "range": "stddev: 9.701561546296355e-8",
            "extra": "mean: 528.2026000118094 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6207100759293682,
            "unit": "iter/sec",
            "range": "stddev: 0.0021878482751115894",
            "extra": "mean: 617.0135021999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11439270.739121636,
            "unit": "iter/sec",
            "range": "stddev: 3.3237848251326357e-9",
            "extra": "mean: 87.41816002140695 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9493.92158876042,
            "unit": "iter/sec",
            "range": "stddev: 0.000007901997565536684",
            "extra": "mean: 105.33055183264534 usec\nrounds: 4447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.1002038998744,
            "unit": "iter/sec",
            "range": "stddev: 0.00026094375937537527",
            "extra": "mean: 3.5958262021268936 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.77262930319868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007985798562494486",
            "extra": "mean: 24.52625737142609 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.21014429191002,
            "unit": "iter/sec",
            "range": "stddev: 0.00019665869001535144",
            "extra": "mean: 18.79340891304515 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.77106641602484,
            "unit": "iter/sec",
            "range": "stddev: 0.000258023326927938",
            "extra": "mean: 3.5115927070311637 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.17940359891715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008386541367771922",
            "extra": "mean: 10.082738590000133 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2201.7128665595096,
            "unit": "iter/sec",
            "range": "stddev: 0.00009091740055926087",
            "extra": "mean: 454.19183181803476 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.53008919671396,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915849716704649",
            "extra": "mean: 6.19079705194853 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 237.4506159470185,
            "unit": "iter/sec",
            "range": "stddev: 0.00028382765580519547",
            "extra": "mean: 4.211402004630414 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 81.74662051409436,
            "unit": "iter/sec",
            "range": "stddev: 0.019413012833401876",
            "extra": "mean: 12.232921602276937 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.70776571177394,
            "unit": "iter/sec",
            "range": "stddev: 0.0008728143363808898",
            "extra": "mean: 10.02930908000394 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.3704552469196,
            "unit": "iter/sec",
            "range": "stddev: 0.000021819194762327443",
            "extra": "mean: 568.062249067759 usec\nrounds: 1341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.2720882079209,
            "unit": "iter/sec",
            "range": "stddev: 0.0008131941528339689",
            "extra": "mean: 9.972865010315061 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6927045.633287118,
            "unit": "iter/sec",
            "range": "stddev: 4.128212538234853e-9",
            "extra": "mean: 144.36168793151964 nsec\nrounds: 69440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9425.626282800013,
            "unit": "iter/sec",
            "range": "stddev: 0.000038690178972134805",
            "extra": "mean: 106.09374592167006 usec\nrounds: 3310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 526.1548367701932,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063703922667396",
            "extra": "mean: 1.9005812170016532 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.88796903574448,
            "unit": "iter/sec",
            "range": "stddev: 0.0007033283082719988",
            "extra": "mean: 21.327432613634045 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1613.7351204348695,
            "unit": "iter/sec",
            "range": "stddev: 0.0051799519657116854",
            "extra": "mean: 619.680384554387 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7750379561004432,
            "unit": "iter/sec",
            "range": "stddev: 0.007215639001432286",
            "extra": "mean: 1.2902593894000234 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.64538548306342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008632454752878229",
            "extra": "mean: 10.137321630434416 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.62820173780257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006924702629220581",
            "extra": "mean: 9.937572000000614 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.57888830552861,
            "unit": "iter/sec",
            "range": "stddev: 0.00006875382590658986",
            "extra": "mean: 9.471590542856998 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2169.7558777236627,
            "unit": "iter/sec",
            "range": "stddev: 0.00008323240565770215",
            "extra": "mean: 460.88134166002186 usec\nrounds: 1241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.5492931239602,
            "unit": "iter/sec",
            "range": "stddev: 0.0007076008929777156",
            "extra": "mean: 9.385327398057845 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2861034183142395,
            "unit": "iter/sec",
            "range": "stddev: 0.0860184846613481",
            "extra": "mean: 777.5424477999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2148.364335652838,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439058618203317",
            "extra": "mean: 465.47039689900794 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.20476282840357,
            "unit": "iter/sec",
            "range": "stddev: 0.00012695436812361376",
            "extra": "mean: 9.784279835167245 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.08355125313827,
            "unit": "iter/sec",
            "range": "stddev: 0.003993841815023004",
            "extra": "mean: 4.502809840518835 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.0772777242328,
            "unit": "iter/sec",
            "range": "stddev: 0.00010215093921711743",
            "extra": "mean: 5.744575128203495 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.2433245501495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224113922232917",
            "extra": "mean: 10.49942350000035 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.72240536756965,
            "unit": "iter/sec",
            "range": "stddev: 0.00028203139912887944",
            "extra": "mean: 3.600717769516959 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6202413.178586254,
            "unit": "iter/sec",
            "range": "stddev: 5.188715072252928e-9",
            "extra": "mean: 161.22756920686228 nsec\nrounds: 63288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.87122541504803,
            "unit": "iter/sec",
            "range": "stddev: 0.0003612031230811529",
            "extra": "mean: 33.47703303448129 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1697066384136445,
            "unit": "iter/sec",
            "range": "stddev: 0.0775352757094773",
            "extra": "mean: 5.892521408400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2126.5857122844045,
            "unit": "iter/sec",
            "range": "stddev: 0.00008572699697915166",
            "extra": "mean: 470.23733594343946 usec\nrounds: 1277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.67267330161023,
            "unit": "iter/sec",
            "range": "stddev: 0.0009734492066920688",
            "extra": "mean: 10.675471989362023 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.50146752133335,
            "unit": "iter/sec",
            "range": "stddev: 0.004561069078950596",
            "extra": "mean: 6.9685698500005735 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2072.598060761667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001022636898628443",
            "extra": "mean: 482.48621811047434 usec\nrounds: 1270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.1651232449273,
            "unit": "iter/sec",
            "range": "stddev: 0.00030629734401732843",
            "extra": "mean: 3.556628889312435 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.4363715044925,
            "unit": "iter/sec",
            "range": "stddev: 0.00016658950882491086",
            "extra": "mean: 7.972169379629935 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.75206965736055,
            "unit": "iter/sec",
            "range": "stddev: 0.020386444149293068",
            "extra": "mean: 12.084289905262244 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2656337.6303285044,
            "unit": "iter/sec",
            "range": "stddev: 2.7370205044616033e-8",
            "extra": "mean: 376.4581687894544 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4514.157683554199,
            "unit": "iter/sec",
            "range": "stddev: 0.00008759844387184357",
            "extra": "mean: 221.52527007267832 usec\nrounds: 1781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 425.5870965219301,
            "unit": "iter/sec",
            "range": "stddev: 0.000029431938604803977",
            "extra": "mean: 2.3496952989703037 msec\nrounds: 388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2119.112512421403,
            "unit": "iter/sec",
            "range": "stddev: 0.00009107244789502008",
            "extra": "mean: 471.895661102652 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9054868824635369,
            "unit": "iter/sec",
            "range": "stddev: 0.01009830599515821",
            "extra": "mean: 1.1043782293999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.97893526651052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007791576845555888",
            "extra": "mean: 9.805946663265429 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2126.5231046065073,
            "unit": "iter/sec",
            "range": "stddev: 0.00011227529859897964",
            "extra": "mean: 470.2511803581087 usec\nrounds: 1680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.91875565191464,
            "unit": "iter/sec",
            "range": "stddev: 0.0009408414715141394",
            "extra": "mean: 10.109306303032172 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13843.650974767346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027254812619296632",
            "extra": "mean: 72.23527968327777 usec\nrounds: 6940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6051955.737008004,
            "unit": "iter/sec",
            "range": "stddev: 9.770082582398418e-9",
            "extra": "mean: 165.23584167737357 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.83202680223385,
            "unit": "iter/sec",
            "range": "stddev: 0.000580523425224901",
            "extra": "mean: 16.438709222216453 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.556482222368828,
            "unit": "iter/sec",
            "range": "stddev: 0.0008581430649957779",
            "extra": "mean: 116.87045844444634 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.22615186679263,
            "unit": "iter/sec",
            "range": "stddev: 0.00002698083680775213",
            "extra": "mean: 5.019421349204315 msec\nrounds: 126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "3e019b24bf9b820e89edbb915f5e427649a625b0",
          "message": "chore(deps): add `pydeps` to development dependencies",
          "timestamp": "2023-05-22T17:01:11+02:00",
          "tree_id": "10f4c97c819f168e76eae02d217a58141df0e20f",
          "url": "https://github.com/ibis-project/ibis/commit/3e019b24bf9b820e89edbb915f5e427649a625b0"
        },
        "date": 1684768171945,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 153.32644964387748,
            "unit": "iter/sec",
            "range": "stddev: 0.00034897660636264377",
            "extra": "mean: 6.5220319281027015 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.84948973035323,
            "unit": "iter/sec",
            "range": "stddev: 0.0009227911640406264",
            "extra": "mean: 12.368661859650194 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 81.97315280882691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005188952765016776",
            "extra": "mean: 12.199115999992616 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.98045973255734,
            "unit": "iter/sec",
            "range": "stddev: 0.00020019211202156417",
            "extra": "mean: 7.634726599997066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 129536.31484245844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044047916806860146",
            "extra": "mean: 7.719842896690369 usec\nrounds: 32259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.735257910411356,
            "unit": "iter/sec",
            "range": "stddev: 0.001871664656589504",
            "extra": "mean: 29.64257758620486 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10842866725061263,
            "unit": "iter/sec",
            "range": "stddev: 0.12047325753935359",
            "extra": "mean: 9.222653246199979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 89.45370594943142,
            "unit": "iter/sec",
            "range": "stddev: 0.00034363254087690904",
            "extra": "mean: 11.178966699996806 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5156029392273466,
            "unit": "iter/sec",
            "range": "stddev: 0.04550472395035887",
            "extra": "mean: 1.9394769190000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1631972.33997773,
            "unit": "iter/sec",
            "range": "stddev: 0.000002184881621937648",
            "extra": "mean: 612.755483351909 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 3768.944909252836,
            "unit": "iter/sec",
            "range": "stddev: 0.0003312182845936493",
            "extra": "mean: 265.32624489813577 usec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.51396333867254,
            "unit": "iter/sec",
            "range": "stddev: 0.0004595429797385358",
            "extra": "mean: 4.8189528256850505 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1670.8982420331283,
            "unit": "iter/sec",
            "range": "stddev: 0.00014202778178668704",
            "extra": "mean: 598.4804908186463 usec\nrounds: 1416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.44136696621226,
            "unit": "iter/sec",
            "range": "stddev: 0.001420112190801567",
            "extra": "mean: 11.984463298700845 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.06192456944729,
            "unit": "iter/sec",
            "range": "stddev: 0.0004846281639122814",
            "extra": "mean: 7.515297882814576 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11398.587221076998,
            "unit": "iter/sec",
            "range": "stddev: 0.000018111845319027893",
            "extra": "mean: 87.73017046804813 usec\nrounds: 1666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1026975262900225,
            "unit": "iter/sec",
            "range": "stddev: 0.06711692640161823",
            "extra": "mean: 906.8670022000106 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.18463040842573,
            "unit": "iter/sec",
            "range": "stddev: 0.0009459861336117833",
            "extra": "mean: 12.021451499996212 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.91882606922358,
            "unit": "iter/sec",
            "range": "stddev: 0.0009007134162292774",
            "extra": "mean: 12.207206181824107 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.64666479630846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008186150456356381",
            "extra": "mean: 10.035458808823538 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.79567493124016,
            "unit": "iter/sec",
            "range": "stddev: 0.00121879067602445",
            "extra": "mean: 27.17710714285561 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1690.3801500175537,
            "unit": "iter/sec",
            "range": "stddev: 0.00011030935073702023",
            "extra": "mean: 591.5829051764572 usec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 621.5672008927817,
            "unit": "iter/sec",
            "range": "stddev: 0.00006826921336011253",
            "extra": "mean: 1.608836500001384 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.60681330882574,
            "unit": "iter/sec",
            "range": "stddev: 0.0004986416755007125",
            "extra": "mean: 22.418099967749622 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.924007562955189,
            "unit": "iter/sec",
            "range": "stddev: 0.0029925556164650618",
            "extra": "mean: 144.42502999999564 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.4868063012767,
            "unit": "iter/sec",
            "range": "stddev: 0.00044261408452907073",
            "extra": "mean: 5.038118243900465 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.38235420867998,
            "unit": "iter/sec",
            "range": "stddev: 0.012090470031871607",
            "extra": "mean: 8.306865292454104 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 316.7699508291073,
            "unit": "iter/sec",
            "range": "stddev: 0.00023454689183425881",
            "extra": "mean: 3.1568650921042862 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1657.0913834633939,
            "unit": "iter/sec",
            "range": "stddev: 0.00013221324102540114",
            "extra": "mean: 603.4670205755075 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.21287896833678,
            "unit": "iter/sec",
            "range": "stddev: 0.0008537536189856488",
            "extra": "mean: 21.18066133333339 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9242448249710489,
            "unit": "iter/sec",
            "range": "stddev: 0.003119530424486884",
            "extra": "mean: 519.6843910000098 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 199.93629165170233,
            "unit": "iter/sec",
            "range": "stddev: 0.00046233448594119354",
            "extra": "mean: 5.001593216213309 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6120051448937126,
            "unit": "iter/sec",
            "range": "stddev: 0.015681290001877114",
            "extra": "mean: 1.6339731917999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.23988679082135,
            "unit": "iter/sec",
            "range": "stddev: 0.0028332614978950677",
            "extra": "mean: 47.08123022727891 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.472273445950325,
            "unit": "iter/sec",
            "range": "stddev: 0.001122852196395261",
            "extra": "mean: 40.862570541662535 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 151.14638620846517,
            "unit": "iter/sec",
            "range": "stddev: 0.00037868787637220647",
            "extra": "mean: 6.616102608108494 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3331.7254411765093,
            "unit": "iter/sec",
            "range": "stddev: 0.000047496139525216996",
            "extra": "mean: 300.14478013136545 usec\nrounds: 1983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3615278.2350729383,
            "unit": "iter/sec",
            "range": "stddev: 3.693848426882281e-7",
            "extra": "mean: 276.6038835677453 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 208.95871493533662,
            "unit": "iter/sec",
            "range": "stddev: 0.000549941652828507",
            "extra": "mean: 4.785634331209661 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.6453207187428,
            "unit": "iter/sec",
            "range": "stddev: 0.0008662066087933167",
            "extra": "mean: 12.715314666670048 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5649594240616332,
            "unit": "iter/sec",
            "range": "stddev: 0.08914701012443424",
            "extra": "mean: 1.7700386212000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8010.762067902602,
            "unit": "iter/sec",
            "range": "stddev: 0.00002222043379646169",
            "extra": "mean: 124.83206860016284 usec\nrounds: 5277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1725.7452187608008,
            "unit": "iter/sec",
            "range": "stddev: 0.00012279612902355412",
            "extra": "mean: 579.4598119866537 usec\nrounds: 1218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.03364222142471,
            "unit": "iter/sec",
            "range": "stddev: 0.0012192546222395038",
            "extra": "mean: 12.814985582275469 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.787617368201005,
            "unit": "iter/sec",
            "range": "stddev: 0.0013589426108129665",
            "extra": "mean: 18.25229947999901 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.64872927514325,
            "unit": "iter/sec",
            "range": "stddev: 0.00035292715674852855",
            "extra": "mean: 10.678201484848394 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.81067829149146,
            "unit": "iter/sec",
            "range": "stddev: 0.0009455359744256534",
            "extra": "mean: 12.22334322222583 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.42248787056332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597571261936377",
            "extra": "mean: 28.230654031249358 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.08593578093402,
            "unit": "iter/sec",
            "range": "stddev: 0.004562380246250608",
            "extra": "mean: 7.628583448274443 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.30000500133826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009485568561646818",
            "extra": "mean: 12.004801199999141 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 526.7499895484436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001684033414186095",
            "extra": "mean: 1.8984338297894412 msec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9647451.280077938,
            "unit": "iter/sec",
            "range": "stddev: 1.8309401573415963e-7",
            "extra": "mean: 103.65431977515014 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1225362390529314,
            "unit": "iter/sec",
            "range": "stddev: 0.014118359344443611",
            "extra": "mean: 890.8398368000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 158.40537230146316,
            "unit": "iter/sec",
            "range": "stddev: 0.0008387141555860307",
            "extra": "mean: 6.312917203949927 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.05610702764322,
            "unit": "iter/sec",
            "range": "stddev: 0.0012280198399541255",
            "extra": "mean: 12.491239421056308 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6978.210681628385,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400978201197626",
            "extra": "mean: 143.30321132789976 usec\nrounds: 4396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 91.92073353422484,
            "unit": "iter/sec",
            "range": "stddev: 0.00027289744847931984",
            "extra": "mean: 10.878938423915754 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 198.3973760300334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005696191393014368",
            "extra": "mean: 5.040389243094727 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.313836950609629,
            "unit": "iter/sec",
            "range": "stddev: 0.0038886904067301268",
            "extra": "mean: 65.30042099998923 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 180.84570524841024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006816753645885598",
            "extra": "mean: 5.529575604941222 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.65956284386996,
            "unit": "iter/sec",
            "range": "stddev: 0.001577066550477847",
            "extra": "mean: 12.397786012498813 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.26029904807396,
            "unit": "iter/sec",
            "range": "stddev: 0.0013755480648623172",
            "extra": "mean: 12.777870927706486 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4586416.524754982,
            "unit": "iter/sec",
            "range": "stddev: 4.971792725001203e-7",
            "extra": "mean: 218.03514674301408 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5827441.053193042,
            "unit": "iter/sec",
            "range": "stddev: 8.726294949868135e-8",
            "extra": "mean: 171.60190740190188 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 75.90272844647073,
            "unit": "iter/sec",
            "range": "stddev: 0.0010832250083203023",
            "extra": "mean: 13.17475696153973 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 432.03771106320863,
            "unit": "iter/sec",
            "range": "stddev: 0.00015757480367964075",
            "extra": "mean: 2.314612762712504 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1639.9499178346389,
            "unit": "iter/sec",
            "range": "stddev: 0.0003500435823260945",
            "extra": "mean: 609.7747188038416 usec\nrounds: 1170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 961.0862827130983,
            "unit": "iter/sec",
            "range": "stddev: 0.00009837173466607419",
            "extra": "mean: 1.040489306721817 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.54431210899443,
            "unit": "iter/sec",
            "range": "stddev: 0.001025831523290175",
            "extra": "mean: 12.895852355933261 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 255.51225458771043,
            "unit": "iter/sec",
            "range": "stddev: 0.00023410068493420432",
            "extra": "mean: 3.9137066111117855 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 75.86503725877247,
            "unit": "iter/sec",
            "range": "stddev: 0.001240074264322598",
            "extra": "mean: 13.181302430380962 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1679.7336849282913,
            "unit": "iter/sec",
            "range": "stddev: 0.00020807603429462933",
            "extra": "mean: 595.3324678624222 usec\nrounds: 1338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4882150.725403939,
            "unit": "iter/sec",
            "range": "stddev: 2.4482600628107763e-7",
            "extra": "mean: 204.82776060079004 nsec\nrounds: 50000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1481523.7226649404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022634697404953266",
            "extra": "mean: 674.9807544095321 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1588840.1135152571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011470918595312553",
            "extra": "mean: 629.38995024964 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4586981.058667476,
            "unit": "iter/sec",
            "range": "stddev: 6.482760199739746e-7",
            "extra": "mean: 218.008312484823 nsec\nrounds: 57143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1671135.31553856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010674849738790675",
            "extra": "mean: 598.3955881380724 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1448.2261546084803,
            "unit": "iter/sec",
            "range": "stddev: 0.00010530177767790668",
            "extra": "mean: 690.4998896877016 usec\nrounds: 834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.880977735266814,
            "unit": "iter/sec",
            "range": "stddev: 0.0020393266271651785",
            "extra": "mean: 35.866747913043746 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1689.1776484217048,
            "unit": "iter/sec",
            "range": "stddev: 0.00020103892856258512",
            "extra": "mean: 592.0040446511694 usec\nrounds: 1187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.89173856637944,
            "unit": "iter/sec",
            "range": "stddev: 0.0013442829245357407",
            "extra": "mean: 12.675598461537271 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 891671.5476496404,
            "unit": "iter/sec",
            "range": "stddev: 0.000002123407722398368",
            "extra": "mean: 1.1214891880714406 usec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 79.96620669111904,
            "unit": "iter/sec",
            "range": "stddev: 0.0011442474620957455",
            "extra": "mean: 12.505282435900002 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 78.90270542355837,
            "unit": "iter/sec",
            "range": "stddev: 0.0016394379719862386",
            "extra": "mean: 12.67383665277243 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 208.07421114897525,
            "unit": "iter/sec",
            "range": "stddev: 0.0004440536141113831",
            "extra": "mean: 4.805977609998138 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1662.6479700024797,
            "unit": "iter/sec",
            "range": "stddev: 0.00014769080015468686",
            "extra": "mean: 601.4502276140321 usec\nrounds: 1731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 62.55808627191556,
            "unit": "iter/sec",
            "range": "stddev: 0.024905996983679086",
            "extra": "mean: 15.985143721522919 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.33184747485622,
            "unit": "iter/sec",
            "range": "stddev: 0.00134131994169453",
            "extra": "mean: 13.100691691359899 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.08425251212716,
            "unit": "iter/sec",
            "range": "stddev: 0.003747438990151953",
            "extra": "mean: 5.461966205606688 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 64.97577252817969,
            "unit": "iter/sec",
            "range": "stddev: 0.0012884031613803598",
            "extra": "mean: 15.390351835621573 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 199.82916292631376,
            "unit": "iter/sec",
            "range": "stddev: 0.00044513146963937825",
            "extra": "mean: 5.004274578124246 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1586.652211994447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001688434333479413",
            "extra": "mean: 630.2578425444503 usec\nrounds: 1556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "839e1f0a036f6dffc85845ea828a71bd1859f837",
          "message": "feat(snowflake): implement array zip",
          "timestamp": "2023-05-22T17:54:53+02:00",
          "tree_id": "30848d2deeeb650c57e0a51a466693a947b20b97",
          "url": "https://github.com/ibis-project/ibis/commit/839e1f0a036f6dffc85845ea828a71bd1859f837"
        },
        "date": 1684771125239,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.22424927660173,
            "unit": "iter/sec",
            "range": "stddev: 0.010531404891764169",
            "extra": "mean: 11.207715482143499 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.00569133249644,
            "unit": "iter/sec",
            "range": "stddev: 0.0007321453547178022",
            "extra": "mean: 9.803374566036839 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.01108180245112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006819085786350402",
            "extra": "mean: 9.802856536082457 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2154.485795744721,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485625184773661",
            "extra": "mean: 464.1478732303915 usec\nrounds: 1554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.20076623080524,
            "unit": "iter/sec",
            "range": "stddev: 0.0001715892164621247",
            "extra": "mean: 7.92388215909186 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 85.59411745590451,
            "unit": "iter/sec",
            "range": "stddev: 0.011997353701045724",
            "extra": "mean: 11.683045864865301 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.1658760748409,
            "unit": "iter/sec",
            "range": "stddev: 0.00003657619118726111",
            "extra": "mean: 1.872077653758422 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.4409240754904,
            "unit": "iter/sec",
            "range": "stddev: 0.00024732356498897106",
            "extra": "mean: 3.6976652236288836 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 413.04295862628226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000358249580089525",
            "extra": "mean: 2.4210556774187535 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.74697400663037,
            "unit": "iter/sec",
            "range": "stddev: 0.0021353399015543477",
            "extra": "mean: 25.808467000000576 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10079.92751903388,
            "unit": "iter/sec",
            "range": "stddev: 0.00000270771384078295",
            "extra": "mean: 99.20706256187901 usec\nrounds: 4044"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2229.7836354116907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008449722587707071",
            "extra": "mean: 448.47400623037015 usec\nrounds: 321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.77738406963202,
            "unit": "iter/sec",
            "range": "stddev: 0.0006887971149014864",
            "extra": "mean: 9.45381670000188 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 997148.8182134675,
            "unit": "iter/sec",
            "range": "stddev: 5.342753303563601e-7",
            "extra": "mean: 1.0028593342683199 usec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.20605620689656,
            "unit": "iter/sec",
            "range": "stddev: 0.00012001573946374183",
            "extra": "mean: 5.707565261437792 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7922359167659782,
            "unit": "iter/sec",
            "range": "stddev: 0.0033295341598523105",
            "extra": "mean: 1.2622502701999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 368.29070437470585,
            "unit": "iter/sec",
            "range": "stddev: 0.01884685929407384",
            "extra": "mean: 2.715246375001041 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.29421944209851,
            "unit": "iter/sec",
            "range": "stddev: 0.0008102397775198967",
            "extra": "mean: 10.384839357894142 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2160.6456057051596,
            "unit": "iter/sec",
            "range": "stddev: 0.00009667183388609217",
            "extra": "mean: 462.8246286015215 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.30998562855586,
            "unit": "iter/sec",
            "range": "stddev: 0.0007872359756466523",
            "extra": "mean: 9.870695310000457 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2238.0347999264095,
            "unit": "iter/sec",
            "range": "stddev: 0.00008645119418817578",
            "extra": "mean: 446.820576709925 usec\nrounds: 1623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.62855304691559,
            "unit": "iter/sec",
            "range": "stddev: 0.00015398108677884957",
            "extra": "mean: 18.646783162789703 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1776.2961693592758,
            "unit": "iter/sec",
            "range": "stddev: 0.000006892104614471453",
            "extra": "mean: 562.969181181485 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 670.3627368854726,
            "unit": "iter/sec",
            "range": "stddev: 0.000043933282278862944",
            "extra": "mean: 1.4917296934582507 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.2891817109238,
            "unit": "iter/sec",
            "range": "stddev: 0.0387837120490062",
            "extra": "mean: 35.34920204545374 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.65532432557801,
            "unit": "iter/sec",
            "range": "stddev: 0.0005653330320951773",
            "extra": "mean: 11.539971811112713 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.98599962938741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999939293030776",
            "extra": "mean: 10.754307142856792 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.01127221104698,
            "unit": "iter/sec",
            "range": "stddev: 0.00006829715284627658",
            "extra": "mean: 52.60037250000159 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 763.2139376933527,
            "unit": "iter/sec",
            "range": "stddev: 0.000011879873227961729",
            "extra": "mean: 1.3102486086958545 msec\nrounds: 667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2189.617933252847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008118781133250131",
            "extra": "mean: 456.70068043077384 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3721280836428502,
            "unit": "iter/sec",
            "range": "stddev: 0.0004542864850039641",
            "extra": "mean: 728.7949368000028 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1920161.1188850515,
            "unit": "iter/sec",
            "range": "stddev: 1.8133526029305709e-7",
            "extra": "mean: 520.7896307059137 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5460410.223841429,
            "unit": "iter/sec",
            "range": "stddev: 9.941155939510938e-9",
            "extra": "mean: 183.13642363972872 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2765869.235627936,
            "unit": "iter/sec",
            "range": "stddev: 8.964127697554055e-8",
            "extra": "mean: 361.5499919948203 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.0074503094825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002949477789759619",
            "extra": "mean: 3.6763698893623236 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4566.5591269296565,
            "unit": "iter/sec",
            "range": "stddev: 0.000024803301931518175",
            "extra": "mean: 218.98325899315657 usec\nrounds: 1390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2182.5536594380605,
            "unit": "iter/sec",
            "range": "stddev: 0.00008480572630695509",
            "extra": "mean: 458.1788840222461 usec\nrounds: 1233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16582483947955076,
            "unit": "iter/sec",
            "range": "stddev: 0.11021203672259908",
            "extra": "mean: 6.030459629199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.59134994688033,
            "unit": "iter/sec",
            "range": "stddev: 0.0007949226564195396",
            "extra": "mean: 9.843357731961195 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.317913110657745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006715168825894389",
            "extra": "mean: 39.49772619999408 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.71230736191714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007808029541008882",
            "extra": "mean: 10.028852269664029 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9215067124990962,
            "unit": "iter/sec",
            "range": "stddev: 0.005301743620202934",
            "extra": "mean: 1.0851792899999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.7956232232054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002004061128924005",
            "extra": "mean: 10.331045626867393 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.3971475855841,
            "unit": "iter/sec",
            "range": "stddev: 0.00007449471819302241",
            "extra": "mean: 6.157743623378576 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.74321018665587,
            "unit": "iter/sec",
            "range": "stddev: 0.01998950248179828",
            "extra": "mean: 11.941266614583945 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.35111599795616,
            "unit": "iter/sec",
            "range": "stddev: 0.000847135090940754",
            "extra": "mean: 9.770289168317118 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.869381731334997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793986172464112",
            "extra": "mean: 33.479099400003065 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 315.0413944701853,
            "unit": "iter/sec",
            "range": "stddev: 0.000025143808598724924",
            "extra": "mean: 3.1741860515876983 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.61581470507243,
            "unit": "iter/sec",
            "range": "stddev: 0.00023313535895779178",
            "extra": "mean: 116.0656344444438 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.0478364758355,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393109731855688",
            "extra": "mean: 21.254962499999664 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 220.63159450110192,
            "unit": "iter/sec",
            "range": "stddev: 0.0036860744858592037",
            "extra": "mean: 4.532442428570699 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7035.532420403643,
            "unit": "iter/sec",
            "range": "stddev: 0.000017923273150842857",
            "extra": "mean: 142.13565374241114 usec\nrounds: 2605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.57682003544915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693400182646956",
            "extra": "mean: 9.043486688072747 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.50425108361644,
            "unit": "iter/sec",
            "range": "stddev: 0.00006575454908444102",
            "extra": "mean: 9.478291061537027 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149389.0714007746,
            "unit": "iter/sec",
            "range": "stddev: 3.156887671068122e-7",
            "extra": "mean: 6.6939300888834286 usec\nrounds: 42554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.16562845210144,
            "unit": "iter/sec",
            "range": "stddev: 0.00017259670532173031",
            "extra": "mean: 9.788027687499934 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13770.488193358531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015062168403764604",
            "extra": "mean: 72.6190666560607 usec\nrounds: 6346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.53864783518247,
            "unit": "iter/sec",
            "range": "stddev: 0.00008743931087873821",
            "extra": "mean: 5.24827908333331 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1749942.2997957373,
            "unit": "iter/sec",
            "range": "stddev: 1.3980231908215244e-7",
            "extra": "mean: 571.4474129328295 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9276883071129778,
            "unit": "iter/sec",
            "range": "stddev: 0.00327638262008394",
            "extra": "mean: 1.0779482638000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 202.3199632976317,
            "unit": "iter/sec",
            "range": "stddev: 0.01714339008482014",
            "extra": "mean: 4.942665981650589 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.73123254659794,
            "unit": "iter/sec",
            "range": "stddev: 0.00030134457336464937",
            "extra": "mean: 3.639921062962462 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6250442.556867511,
            "unit": "iter/sec",
            "range": "stddev: 3.549574143731472e-8",
            "extra": "mean: 159.98867134635842 nsec\nrounds: 62108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6123898.659011835,
            "unit": "iter/sec",
            "range": "stddev: 9.221844330048494e-9",
            "extra": "mean: 163.2946682629177 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.32745463361683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006546917662712749",
            "extra": "mean: 16.57620077083048 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1937757.2716739932,
            "unit": "iter/sec",
            "range": "stddev: 9.591076278091541e-8",
            "extra": "mean: 516.060506967479 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.72708810587167,
            "unit": "iter/sec",
            "range": "stddev: 0.0012387051210199982",
            "extra": "mean: 9.734530769229913 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.9244246002465,
            "unit": "iter/sec",
            "range": "stddev: 0.000014828404503144092",
            "extra": "mean: 856.219785233344 usec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.61703995007622,
            "unit": "iter/sec",
            "range": "stddev: 0.00009949890175293984",
            "extra": "mean: 4.984621447155492 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.58642738967006,
            "unit": "iter/sec",
            "range": "stddev: 0.00029101072634760497",
            "extra": "mean: 3.6286257254100303 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.77358667196306,
            "unit": "iter/sec",
            "range": "stddev: 0.0008816916785243632",
            "extra": "mean: 9.923235175256664 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.5573219838919,
            "unit": "iter/sec",
            "range": "stddev: 0.00009106420555284805",
            "extra": "mean: 6.267340085470693 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.13558721876917,
            "unit": "iter/sec",
            "range": "stddev: 0.024599336920333222",
            "extra": "mean: 12.325047913977123 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5485781655207846,
            "unit": "iter/sec",
            "range": "stddev: 0.004563679648368952",
            "extra": "mean: 392.37564440000483 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1876188.27073535,
            "unit": "iter/sec",
            "range": "stddev: 1.0600725469896267e-7",
            "extra": "mean: 532.9955503922118 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.85199448540834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004332582057068652",
            "extra": "mean: 9.103157431819138 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.2864479925795,
            "unit": "iter/sec",
            "range": "stddev: 0.003706811001512477",
            "extra": "mean: 6.317660246232073 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.92533797188829,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915996133706183",
            "extra": "mean: 21.31044853846494 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2177.4005173377964,
            "unit": "iter/sec",
            "range": "stddev: 0.00010052740880331196",
            "extra": "mean: 459.2632324817541 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 226.14997204547652,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474489314228931",
            "extra": "mean: 4.421844455496593 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6491392671170815,
            "unit": "iter/sec",
            "range": "stddev: 0.0022272426071358506",
            "extra": "mean: 606.3769263999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10717705.224094814,
            "unit": "iter/sec",
            "range": "stddev: 3.7971761120832235e-9",
            "extra": "mean: 93.30355510736425 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.12261827820349,
            "unit": "iter/sec",
            "range": "stddev: 0.0005017798254547286",
            "extra": "mean: 19.185528913043445 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.8529221304955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002901246235319747",
            "extra": "mean: 3.6383095084039785 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.40113050326356,
            "unit": "iter/sec",
            "range": "stddev: 0.022401939850333036",
            "extra": "mean: 12.284841670103189 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.27450699239824,
            "unit": "iter/sec",
            "range": "stddev: 0.0009395598643057552",
            "extra": "mean: 10.495987138299103 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.9245817969638,
            "unit": "iter/sec",
            "range": "stddev: 0.00031270921928679547",
            "extra": "mean: 3.803372028455757 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2129.5214762206274,
            "unit": "iter/sec",
            "range": "stddev: 0.00014631640756677854",
            "extra": "mean: 469.5890655090983 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.14915986889248,
            "unit": "iter/sec",
            "range": "stddev: 0.02585176506317236",
            "extra": "mean: 12.634372893615817 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.79281437747312,
            "unit": "iter/sec",
            "range": "stddev: 0.0004427797803036211",
            "extra": "mean: 3.971519213017962 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9552.123520717112,
            "unit": "iter/sec",
            "range": "stddev: 0.000019564886749567097",
            "extra": "mean: 104.68876348082719 usec\nrounds: 3746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7102526.680820743,
            "unit": "iter/sec",
            "range": "stddev: 5.216036379288523e-9",
            "extra": "mean: 140.794965642376 nsec\nrounds: 59521"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "707dd707f0a9c3ef69d0ef4f0c879fcc8f9caa2e",
          "message": "test(repr): add test for `DummyTable` repr",
          "timestamp": "2023-05-22T12:11:15-05:00",
          "tree_id": "a2a2c411a23d7c33058153c9ed1941741758b99e",
          "url": "https://github.com/ibis-project/ibis/commit/707dd707f0a9c3ef69d0ef4f0c879fcc8f9caa2e"
        },
        "date": 1684775718771,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8451.348372170032,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740249031314196",
            "extra": "mean: 118.32431417606234 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8182563690881649,
            "unit": "iter/sec",
            "range": "stddev: 0.00987721708248834",
            "extra": "mean: 1.2221108661999949 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1831.5118642589848,
            "unit": "iter/sec",
            "range": "stddev: 0.00013824396815641208",
            "extra": "mean: 545.9970090909522 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.44705714452593,
            "unit": "iter/sec",
            "range": "stddev: 0.0003803958039165966",
            "extra": "mean: 7.069782999997187 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1984.044776590332,
            "unit": "iter/sec",
            "range": "stddev: 0.00010082594677672783",
            "extra": "mean: 504.0208828948628 usec\nrounds: 760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1907.715879086839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000980913414862297",
            "extra": "mean: 524.1870715458253 usec\nrounds: 1216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.21921097788058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207254799504527",
            "extra": "mean: 10.50208240259731 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.38366567806838,
            "unit": "iter/sec",
            "range": "stddev: 0.00036659996477625905",
            "extra": "mean: 10.824424346666698 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 28.18000704969433,
            "unit": "iter/sec",
            "range": "stddev: 0.0010545280219984455",
            "extra": "mean: 35.4861515199957 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 17.393242475995944,
            "unit": "iter/sec",
            "range": "stddev: 0.0015900010877423368",
            "extra": "mean: 57.49359277777444 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.53538040620401,
            "unit": "iter/sec",
            "range": "stddev: 0.0004898156660119084",
            "extra": "mean: 11.045405624997784 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.1752519523839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009726685084783186",
            "extra": "mean: 10.732463600002262 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 86.4793124037663,
            "unit": "iter/sec",
            "range": "stddev: 0.0009428590961683234",
            "extra": "mean: 11.563459192772774 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.60031012374117,
            "unit": "iter/sec",
            "range": "stddev: 0.0009089658112216723",
            "extra": "mean: 11.037489812498524 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5529534.0898504155,
            "unit": "iter/sec",
            "range": "stddev: 4.0843722531487905e-8",
            "extra": "mean: 180.84706301638306 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1838.9584403988868,
            "unit": "iter/sec",
            "range": "stddev: 0.00021013247630741893",
            "extra": "mean: 543.7860791367808 usec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.00216585261498,
            "unit": "iter/sec",
            "range": "stddev: 0.0003111690988843094",
            "extra": "mean: 4.032222849998371 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 256.0559027100761,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273540809082733",
            "extra": "mean: 3.905397178569509 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 605.959131861144,
            "unit": "iter/sec",
            "range": "stddev: 0.00012222553839158923",
            "extra": "mean: 1.6502763097712516 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 139.71787961046454,
            "unit": "iter/sec",
            "range": "stddev: 0.004421428235231912",
            "extra": "mean: 7.15728010465099 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.1237937672137,
            "unit": "iter/sec",
            "range": "stddev: 0.00043488682901671785",
            "extra": "mean: 4.164518577319509 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.738107398039205,
            "unit": "iter/sec",
            "range": "stddev: 0.0015664568696417498",
            "extra": "mean: 17.941046918919582 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.60500423736231,
            "unit": "iter/sec",
            "range": "stddev: 0.000939129726313647",
            "extra": "mean: 11.036917976188729 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1794.3801807112225,
            "unit": "iter/sec",
            "range": "stddev: 0.00011125430663970423",
            "extra": "mean: 557.2955000002502 usec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 219.16030966692082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676199346010999",
            "extra": "mean: 4.562869990099014 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3734.8077018166487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000327624335798102",
            "extra": "mean: 267.7514024386289 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.422611105367363,
            "unit": "iter/sec",
            "range": "stddev: 0.03354459970529947",
            "extra": "mean: 36.46625757691879 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.4568936388899,
            "unit": "iter/sec",
            "range": "stddev: 0.00021334973132272264",
            "extra": "mean: 5.223107828575328 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.59567769879243,
            "unit": "iter/sec",
            "range": "stddev: 0.0007717283529582046",
            "extra": "mean: 10.460723999999761 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 177.86563341940246,
            "unit": "iter/sec",
            "range": "stddev: 0.013453674050246197",
            "extra": "mean: 5.622221565658085 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 153058.8472396971,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013108043076984056",
            "extra": "mean: 6.533434806509124 usec\nrounds: 32787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 94.08492105940705,
            "unit": "iter/sec",
            "range": "stddev: 0.00026033858072460565",
            "extra": "mean: 10.628695743588715 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 277.94379285413123,
            "unit": "iter/sec",
            "range": "stddev: 0.00014135769232066545",
            "extra": "mean: 3.597849729728679 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 470.1920180856649,
            "unit": "iter/sec",
            "range": "stddev: 0.00012068630652823205",
            "extra": "mean: 2.1267906760123023 msec\nrounds: 321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 145.26229504676533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002639651496018418",
            "extra": "mean: 6.884098861842041 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 655.8558362142813,
            "unit": "iter/sec",
            "range": "stddev: 0.00007240032951310467",
            "extra": "mean: 1.5247253203877564 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.2391985057887,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812741129358977",
            "extra": "mean: 4.012209981395742 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.602583756540035,
            "unit": "iter/sec",
            "range": "stddev: 0.0008071772626554801",
            "extra": "mean: 22.420225820513615 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8254179123246425,
            "unit": "iter/sec",
            "range": "stddev: 0.01813554007293222",
            "extra": "mean: 1.2115075104000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 78.31923084269349,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904369455486073",
            "extra": "mean: 12.76825613888535 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4569677003277386,
            "unit": "iter/sec",
            "range": "stddev: 0.01019023955767244",
            "extra": "mean: 686.3570138 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4882920.870645131,
            "unit": "iter/sec",
            "range": "stddev: 3.9544988762955184e-8",
            "extra": "mean: 204.79545470672974 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1015.9626298853019,
            "unit": "iter/sec",
            "range": "stddev: 0.0081268423194669",
            "extra": "mean: 984.2881722065861 usec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 193.97303662277923,
            "unit": "iter/sec",
            "range": "stddev: 0.004748984970252487",
            "extra": "mean: 5.155355700002301 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.92049727288524,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901156419629697",
            "extra": "mean: 11.373912011623721 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.321742919333509,
            "unit": "iter/sec",
            "range": "stddev: 0.006559251768271316",
            "extra": "mean: 430.71090759999606 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 206.68292149908692,
            "unit": "iter/sec",
            "range": "stddev: 0.00035738487034623636",
            "extra": "mean: 4.838329131148931 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 402.4479132584982,
            "unit": "iter/sec",
            "range": "stddev: 0.0001539305411532992",
            "extra": "mean: 2.484793601992627 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6392403.720920852,
            "unit": "iter/sec",
            "range": "stddev: 2.1756577789597825e-8",
            "extra": "mean: 156.43567641503972 nsec\nrounds: 71938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.83755639749786,
            "unit": "iter/sec",
            "range": "stddev: 0.0022965359332871565",
            "extra": "mean: 27.903688212118695 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 179.52396008252686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002568575165583901",
            "extra": "mean: 5.570287105633708 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.93352614282551,
            "unit": "iter/sec",
            "range": "stddev: 0.000898721922522045",
            "extra": "mean: 10.53368647126328 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2432747.7190458267,
            "unit": "iter/sec",
            "range": "stddev: 7.42707238939242e-8",
            "extra": "mean: 411.0578306870898 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4090647.6628697547,
            "unit": "iter/sec",
            "range": "stddev: 5.599163406352578e-8",
            "extra": "mean: 244.4600665751779 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.88670294220666,
            "unit": "iter/sec",
            "range": "stddev: 0.0015771469354164474",
            "extra": "mean: 43.693493227276676 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.8721784118379,
            "unit": "iter/sec",
            "range": "stddev: 0.000935358258240263",
            "extra": "mean: 10.652783571430291 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1608.9589165331824,
            "unit": "iter/sec",
            "range": "stddev: 0.00004340918175597848",
            "extra": "mean: 621.5199093800953 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15328461888752407,
            "unit": "iter/sec",
            "range": "stddev: 0.07606340992217937",
            "extra": "mean: 6.5238117643999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 86.8243059377333,
            "unit": "iter/sec",
            "range": "stddev: 0.0009927325415545847",
            "extra": "mean: 11.517512166663993 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1645206.0333014224,
            "unit": "iter/sec",
            "range": "stddev: 4.0807873242388985e-7",
            "extra": "mean: 607.82660636936 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1883.2058118517841,
            "unit": "iter/sec",
            "range": "stddev: 0.00009957042438567073",
            "extra": "mean: 531.0094062510806 usec\nrounds: 1184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6273.023861102191,
            "unit": "iter/sec",
            "range": "stddev: 0.000024078834789757135",
            "extra": "mean: 159.4127524686789 usec\nrounds: 3038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1029.332122653907,
            "unit": "iter/sec",
            "range": "stddev: 0.000060198091728616966",
            "extra": "mean: 971.5037333350867 usec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.94294270384171,
            "unit": "iter/sec",
            "range": "stddev: 0.0008854611524042689",
            "extra": "mean: 10.876310574712727 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.65800691127806,
            "unit": "iter/sec",
            "range": "stddev: 0.0009645693193124916",
            "extra": "mean: 11.279297097223504 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.13218827683555,
            "unit": "iter/sec",
            "range": "stddev: 0.022401075095993872",
            "extra": "mean: 13.489416989360274 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9044.655291416786,
            "unit": "iter/sec",
            "range": "stddev: 0.000008399726942249133",
            "extra": "mean: 110.56253309609068 usec\nrounds: 4774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 153.10840653673304,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903973430020671",
            "extra": "mean: 6.531320014489765 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.4530303573041,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313203561315327",
            "extra": "mean: 11.305435166670057 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1456196.3094459635,
            "unit": "iter/sec",
            "range": "stddev: 4.3025031581139045e-7",
            "extra": "mean: 686.7205977059978 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 42.31728265176228,
            "unit": "iter/sec",
            "range": "stddev: 0.0009473238940307031",
            "extra": "mean: 23.631006939391835 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.610046000035409,
            "unit": "iter/sec",
            "range": "stddev: 0.0021171531533417066",
            "extra": "mean: 131.4052503750105 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.6792824851411,
            "unit": "iter/sec",
            "range": "stddev: 0.0003394400714148687",
            "extra": "mean: 3.9575860361990913 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2256053429019835,
            "unit": "iter/sec",
            "range": "stddev: 0.00915292531015932",
            "extra": "mean: 815.9233359999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1894.2051940199613,
            "unit": "iter/sec",
            "range": "stddev: 0.00010106681620504566",
            "extra": "mean: 527.9259095883684 usec\nrounds: 1095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 99.99181299587949,
            "unit": "iter/sec",
            "range": "stddev: 0.0003277019648328086",
            "extra": "mean: 10.000818767444576 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 251.9712960653054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003461975726624905",
            "extra": "mean: 3.96870602173996 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.34378497306477,
            "unit": "iter/sec",
            "range": "stddev: 0.00103685643238607",
            "extra": "mean: 10.379496718751232 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1692158.043948817,
            "unit": "iter/sec",
            "range": "stddev: 2.647295911068504e-7",
            "extra": "mean: 590.9613487794566 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 75.03037294181054,
            "unit": "iter/sec",
            "range": "stddev: 0.021341169434992504",
            "extra": "mean: 13.327935885052117 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 922051.0945374032,
            "unit": "iter/sec",
            "range": "stddev: 4.842416059684561e-7",
            "extra": "mean: 1.0845385965315772 usec\nrounds: 75758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10285122.022433545,
            "unit": "iter/sec",
            "range": "stddev: 1.5411560808130757e-8",
            "extra": "mean: 97.22782071217067 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.17100839633831,
            "unit": "iter/sec",
            "range": "stddev: 0.0011124126576874938",
            "extra": "mean: 21.199462000003077 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.04460853124,
            "unit": "iter/sec",
            "range": "stddev: 0.0003749073221710508",
            "extra": "mean: 8.617375788990604 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.48790572036728,
            "unit": "iter/sec",
            "range": "stddev: 0.0009144924566564618",
            "extra": "mean: 10.363993212767118 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7059841428644676,
            "unit": "iter/sec",
            "range": "stddev: 0.01662053006029483",
            "extra": "mean: 1.4164624094000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 88.19691909403055,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505154633194179",
            "extra": "mean: 11.338264536586099 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5577498.542231271,
            "unit": "iter/sec",
            "range": "stddev: 2.3281139516781604e-8",
            "extra": "mean: 179.2918442610608 nsec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1965.8405345811043,
            "unit": "iter/sec",
            "range": "stddev: 0.00014993815721902465",
            "extra": "mean: 508.68825950477583 usec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12575.848034210847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062428669775990886",
            "extra": "mean: 79.51750031327025 usec\nrounds: 7981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.47429007938802,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465421916601136",
            "extra": "mean: 20.62949242500025 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.73848927575179,
            "unit": "iter/sec",
            "range": "stddev: 0.02102026372211099",
            "extra": "mean: 13.203326466668209 msec\nrounds: 90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "e19924dac362caa683cf5c9efbfa10a4b479428e",
          "message": "docs: drop `docker-compose` install for conda dev env setup",
          "timestamp": "2023-05-22T14:02:58-04:00",
          "tree_id": "0cd71da9d26b6db3fa488c1b5e3731b0357edba7",
          "url": "https://github.com/ibis-project/ibis/commit/e19924dac362caa683cf5c9efbfa10a4b479428e"
        },
        "date": 1684778809348,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.98291582031501,
            "unit": "iter/sec",
            "range": "stddev: 0.003890913676093782",
            "extra": "mean: 4.329324514969387 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6151878.112414552,
            "unit": "iter/sec",
            "range": "stddev: 3.735426467590544e-8",
            "extra": "mean: 162.55198521879248 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.97000218900075,
            "unit": "iter/sec",
            "range": "stddev: 0.00003798574955992211",
            "extra": "mean: 2.358657440000229 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.285422342135156,
            "unit": "iter/sec",
            "range": "stddev: 0.018834254701125448",
            "extra": "mean: 30.973731407407264 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4511922.488797097,
            "unit": "iter/sec",
            "range": "stddev: 2.79821259727032e-8",
            "extra": "mean: 221.63501311994423 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1712526946019818,
            "unit": "iter/sec",
            "range": "stddev: 0.054794601019691073",
            "extra": "mean: 5.839324177199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6827.638259267521,
            "unit": "iter/sec",
            "range": "stddev: 0.00002034874874569596",
            "extra": "mean: 146.4635298512844 usec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.13402132720412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831066431633677",
            "extra": "mean: 9.88786945161261 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9472.134066362922,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242285593379431",
            "extra": "mean: 105.57283005011104 usec\nrounds: 3401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.18182126242525,
            "unit": "iter/sec",
            "range": "stddev: 0.00006810879219410953",
            "extra": "mean: 8.994276120371106 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9513325798913762,
            "unit": "iter/sec",
            "range": "stddev: 0.0047648921042116365",
            "extra": "mean: 1.0511571043999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 85.21143616110237,
            "unit": "iter/sec",
            "range": "stddev: 0.013335436882732697",
            "extra": "mean: 11.735513976191891 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.4959836582545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788174515056151",
            "extra": "mean: 9.756479857144774 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.6412614578767,
            "unit": "iter/sec",
            "range": "stddev: 0.00016325645840654726",
            "extra": "mean: 5.693423012905345 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 999867.0754033878,
            "unit": "iter/sec",
            "range": "stddev: 1.6132035544837968e-7",
            "extra": "mean: 1.0001329422679095 usec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2168.7537500549074,
            "unit": "iter/sec",
            "range": "stddev: 0.0001307092739394072",
            "extra": "mean: 461.09430357166303 usec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2236.6749676496147,
            "unit": "iter/sec",
            "range": "stddev: 0.00008069720411829155",
            "extra": "mean: 447.0922304150607 usec\nrounds: 434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 518.3705829383325,
            "unit": "iter/sec",
            "range": "stddev: 0.00007619757387425228",
            "extra": "mean: 1.9291218153846592 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.08467366300749,
            "unit": "iter/sec",
            "range": "stddev: 0.00011299052167854678",
            "extra": "mean: 33.23951627999918 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.80237632052527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006969234251518807",
            "extra": "mean: 9.541768374999648 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.24266732301423,
            "unit": "iter/sec",
            "range": "stddev: 0.019871510339709138",
            "extra": "mean: 14.03653228571581 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 287.3043504890308,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560198675200135",
            "extra": "mean: 3.4806295076905895 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 672.7397189270437,
            "unit": "iter/sec",
            "range": "stddev: 0.000022059757332564865",
            "extra": "mean: 1.4864589853486063 msec\nrounds: 546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.18250059508147,
            "unit": "iter/sec",
            "range": "stddev: 0.00019924144895399644",
            "extra": "mean: 20.33243507142875 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.0328774902986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007776455998624071",
            "extra": "mean: 9.800762505155078 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.53477226257351,
            "unit": "iter/sec",
            "range": "stddev: 0.0006576177708412791",
            "extra": "mean: 10.046740222220956 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2189.290316190054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009747777337455946",
            "extra": "mean: 456.76902355292253 usec\nrounds: 1486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.18921745341493,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435058198156052",
            "extra": "mean: 7.862301695238168 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11434903.060198369,
            "unit": "iter/sec",
            "range": "stddev: 2.9440740898146288e-9",
            "extra": "mean: 87.45155028742452 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2134.4555860111,
            "unit": "iter/sec",
            "range": "stddev: 0.00011402694356747495",
            "extra": "mean: 468.5035409281173 usec\nrounds: 1185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2158.0119358199318,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336337538964361",
            "extra": "mean: 463.3894666667134 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 136.4318227292488,
            "unit": "iter/sec",
            "range": "stddev: 0.014675256161703227",
            "extra": "mean: 7.329668254777453 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1784.8793968079658,
            "unit": "iter/sec",
            "range": "stddev: 0.000005413770252676425",
            "extra": "mean: 560.261943629567 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2181.655252361221,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055880005520913",
            "extra": "mean: 458.36756238992984 usec\nrounds: 1138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6134093.625423742,
            "unit": "iter/sec",
            "range": "stddev: 5.46279662523515e-9",
            "extra": "mean: 163.0232697876054 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2217.6049533012506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000815146842351408",
            "extra": "mean: 450.93694371098155 usec\nrounds: 1439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.1127377547473,
            "unit": "iter/sec",
            "range": "stddev: 0.000161181580795859",
            "extra": "mean: 18.827875238094244 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.06797679218242,
            "unit": "iter/sec",
            "range": "stddev: 0.0007827364030506858",
            "extra": "mean: 9.894330842856546 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7830018605907862,
            "unit": "iter/sec",
            "range": "stddev: 0.002455600493425737",
            "extra": "mean: 1.2771361734000037 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.79639910387164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449249508253303",
            "extra": "mean: 3.4746786377931 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9997.269490443647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017321444890741739",
            "extra": "mean: 100.02731255328231 usec\nrounds: 4684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.95588668337746,
            "unit": "iter/sec",
            "range": "stddev: 0.00041442424901055414",
            "extra": "mean: 3.89171858604744 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2711687.156145122,
            "unit": "iter/sec",
            "range": "stddev: 1.4728003347124869e-8",
            "extra": "mean: 368.77410350743907 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5167461495200993,
            "unit": "iter/sec",
            "range": "stddev: 0.0023133073110285824",
            "extra": "mean: 397.33844439999757 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.29357562114562,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565681100116484",
            "extra": "mean: 9.77578497894725 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1918726.4364470001,
            "unit": "iter/sec",
            "range": "stddev: 8.375447301951087e-8",
            "extra": "mean: 521.1790388690058 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.69148477578835,
            "unit": "iter/sec",
            "range": "stddev: 0.000332378330631307",
            "extra": "mean: 3.5881971808522093 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3455367955549955,
            "unit": "iter/sec",
            "range": "stddev: 0.0022056443033048657",
            "extra": "mean: 743.1978102000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.5303814905142,
            "unit": "iter/sec",
            "range": "stddev: 0.00030076601755840633",
            "extra": "mean: 3.7239734083322893 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6292178793983099,
            "unit": "iter/sec",
            "range": "stddev: 0.0025051996432976864",
            "extra": "mean: 613.7914471999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.3168641187588,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804445931373079",
            "extra": "mean: 3.619033543932403 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.7771452694334,
            "unit": "iter/sec",
            "range": "stddev: 0.00016381524397562832",
            "extra": "mean: 9.636033034091763 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.56369232742261,
            "unit": "iter/sec",
            "range": "stddev: 0.00009530115638930321",
            "extra": "mean: 5.275271797685586 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.0856564604544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007694944716321912",
            "extra": "mean: 9.607471711339336 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.414982908157135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075240398737526",
            "extra": "mean: 40.95845586956755 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.64404322419774,
            "unit": "iter/sec",
            "range": "stddev: 0.01992031149918385",
            "extra": "mean: 11.814180442104915 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.15192799312749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008577988280310662",
            "extra": "mean: 10.509508541668508 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5538871.988742335,
            "unit": "iter/sec",
            "range": "stddev: 8.740903453860057e-9",
            "extra": "mean: 180.54217574138596 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.3854411679179,
            "unit": "iter/sec",
            "range": "stddev: 0.00009900636843065421",
            "extra": "mean: 1.3203316906355647 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.98840082075327,
            "unit": "iter/sec",
            "range": "stddev: 0.00033362016295639086",
            "extra": "mean: 3.676627374485074 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.013774384901026,
            "unit": "iter/sec",
            "range": "stddev: 0.035935292059300836",
            "extra": "mean: 27.016969131576285 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.581696473182333,
            "unit": "iter/sec",
            "range": "stddev: 0.00017345387140263132",
            "extra": "mean: 116.52707633333155 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1888209.095851239,
            "unit": "iter/sec",
            "range": "stddev: 9.310052860713841e-8",
            "extra": "mean: 529.6023635291206 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.931379621202716,
            "unit": "iter/sec",
            "range": "stddev: 0.0009886819935294648",
            "extra": "mean: 25.042961437501177 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 237.64804741386953,
            "unit": "iter/sec",
            "range": "stddev: 0.0002682511783584251",
            "extra": "mean: 4.207903287580887 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13847.997280678605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013706575880623744",
            "extra": "mean: 72.21260805670782 usec\nrounds: 6330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4486.201203799232,
            "unit": "iter/sec",
            "range": "stddev: 0.000027586128167956923",
            "extra": "mean: 222.90574019576508 usec\nrounds: 1836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2199.3719382323548,
            "unit": "iter/sec",
            "range": "stddev: 0.00008475857426336233",
            "extra": "mean: 454.6752564296626 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2131.5108248244446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491505395426522",
            "extra": "mean: 469.15079593009426 usec\nrounds: 1818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9379696238623542,
            "unit": "iter/sec",
            "range": "stddev: 0.002812613660171172",
            "extra": "mean: 1.0661326066000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7116967.74912121,
            "unit": "iter/sec",
            "range": "stddev: 3.650053338206369e-9",
            "extra": "mean: 140.50927800306744 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.063139672094614,
            "unit": "iter/sec",
            "range": "stddev: 0.00024987500630197515",
            "extra": "mean: 17.837031708335616 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.69984704878536,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259348314459875",
            "extra": "mean: 9.93050167708335 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.78781677000259,
            "unit": "iter/sec",
            "range": "stddev: 0.00014039059973153196",
            "extra": "mean: 9.543094138461601 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.54127677592186,
            "unit": "iter/sec",
            "range": "stddev: 0.000021927422227368586",
            "extra": "mean: 5.011494444445027 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.0972719217496,
            "unit": "iter/sec",
            "range": "stddev: 0.000020702217763434014",
            "extra": "mean: 3.183727110654842 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146616.99111635739,
            "unit": "iter/sec",
            "range": "stddev: 2.604712442340169e-7",
            "extra": "mean: 6.8204918978755025 usec\nrounds: 39681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.53223359062646,
            "unit": "iter/sec",
            "range": "stddev: 0.0006296919041236541",
            "extra": "mean: 9.299537139784377 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.21318484367125,
            "unit": "iter/sec",
            "range": "stddev: 0.00006292025672515031",
            "extra": "mean: 52.04759169999846 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.161484989497,
            "unit": "iter/sec",
            "range": "stddev: 0.000010536467718063253",
            "extra": "mean: 852.3975708331004 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.8821544010666,
            "unit": "iter/sec",
            "range": "stddev: 0.00004190585045012103",
            "extra": "mean: 6.2157297913047485 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.18414330122364,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063308420530607",
            "extra": "mean: 9.786254184782358 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 87.31254195059034,
            "unit": "iter/sec",
            "range": "stddev: 0.02215490529110538",
            "extra": "mean: 11.453108312502161 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.03417915660715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008296567803599857",
            "extra": "mean: 9.897640663264642 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.13395246303818,
            "unit": "iter/sec",
            "range": "stddev: 0.0008365458766140846",
            "extra": "mean: 9.887876184464103 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.88515310185016,
            "unit": "iter/sec",
            "range": "stddev: 0.0008260267597450205",
            "extra": "mean: 9.534237882352484 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.85517769901767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003529199077910037",
            "extra": "mean: 15.660437196080085 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.04049654700356,
            "unit": "iter/sec",
            "range": "stddev: 0.0037628451439351723",
            "extra": "mean: 6.408592782827844 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.91430993981929,
            "unit": "iter/sec",
            "range": "stddev: 0.00022437164041751238",
            "extra": "mean: 10.109760666666054 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2521010.507149133,
            "unit": "iter/sec",
            "range": "stddev: 1.8259353305562876e-8",
            "extra": "mean: 396.6663356477864 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.7799805087946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963742295299609",
            "extra": "mean: 3.5742371494252283 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.75486104036817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007528208752396962",
            "extra": "mean: 10.443334042105933 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ab758bd0627c0ea9987aed65f8812c00c08b3656",
          "message": "chore(deps): update apache/druid docker tag to v26",
          "timestamp": "2023-05-23T04:13:55-05:00",
          "tree_id": "9cff1a28d777e06246275d35ef2de31aa4a0b819",
          "url": "https://github.com/ibis-project/ibis/commit/ab758bd0627c0ea9987aed65f8812c00c08b3656"
        },
        "date": 1684833655182,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 36.90291932222998,
            "unit": "iter/sec",
            "range": "stddev: 0.004493751591971039",
            "extra": "mean: 27.09812715000055 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 573.7710015104245,
            "unit": "iter/sec",
            "range": "stddev: 0.00013060319011968353",
            "extra": "mean: 1.7428555945970574 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.21045525674607,
            "unit": "iter/sec",
            "range": "stddev: 0.0011551007288878865",
            "extra": "mean: 13.848410129038447 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1475361.5521166492,
            "unit": "iter/sec",
            "range": "stddev: 0.000001339621857975728",
            "extra": "mean: 677.7999593152847 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.96611782802302,
            "unit": "iter/sec",
            "range": "stddev: 0.002923000191633464",
            "extra": "mean: 25.66332125806067 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 185.67043155454115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006629302887741372",
            "extra": "mean: 5.385887196078647 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1539.7943473156956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220376122345614",
            "extra": "mean: 649.4373756750618 usec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1568.2127225569157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343629065726907",
            "extra": "mean: 637.6685927974969 usec\nrounds: 722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4613747711358051,
            "unit": "iter/sec",
            "range": "stddev: 0.21572623965333584",
            "extra": "mean: 2.1674353748000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 192.3624520546164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256190287853517",
            "extra": "mean: 5.198519717954498 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09806349068424741,
            "unit": "iter/sec",
            "range": "stddev: 0.23054023724713035",
            "extra": "mean: 10.197475054400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.39749911754137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160211175429403",
            "extra": "mean: 7.278152851563302 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1546.7841916981035,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404984658876561",
            "extra": "mean: 646.5025989838774 usec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 349.8965278208609,
            "unit": "iter/sec",
            "range": "stddev: 0.00034201272537512915",
            "extra": "mean: 2.8579877777809135 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1525.6469450535799,
            "unit": "iter/sec",
            "range": "stddev: 0.00015000406387703481",
            "extra": "mean: 655.4596417226007 usec\nrounds: 882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.326639134768108,
            "unit": "iter/sec",
            "range": "stddev: 0.0022847974761695004",
            "extra": "mean: 44.78954463158552 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.151306948414766,
            "unit": "iter/sec",
            "range": "stddev: 0.003887018300061768",
            "extra": "mean: 162.56707857144193 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 7399978.746798006,
            "unit": "iter/sec",
            "range": "stddev: 4.67471450274557e-7",
            "extra": "mean: 135.13552325170218 nsec\nrounds: 14859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.24793372578276,
            "unit": "iter/sec",
            "range": "stddev: 0.001059462908100814",
            "extra": "mean: 13.652262243242049 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.58135853456673,
            "unit": "iter/sec",
            "range": "stddev: 0.001154756965552392",
            "extra": "mean: 14.16804692857048 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.12701655153172,
            "unit": "iter/sec",
            "range": "stddev: 0.001720589137620244",
            "extra": "mean: 14.46612409859372 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 166.16790259598267,
            "unit": "iter/sec",
            "range": "stddev: 0.0013068484373194526",
            "extra": "mean: 6.018009401198137 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.79373144740038,
            "unit": "iter/sec",
            "range": "stddev: 0.0014391998624298083",
            "extra": "mean: 14.75062632856959 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 108.63072878295306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900586804654041",
            "extra": "mean: 9.205498399978751 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 472.21131890337944,
            "unit": "iter/sec",
            "range": "stddev: 0.0004239890004800724",
            "extra": "mean: 2.1176959551124463 msec\nrounds: 401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1541423.4543084628,
            "unit": "iter/sec",
            "range": "stddev: 8.604426900766655e-7",
            "extra": "mean: 648.7509951953051 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.5223141771107,
            "unit": "iter/sec",
            "range": "stddev: 0.0005910972138247976",
            "extra": "mean: 8.366638538458842 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118893.28955527666,
            "unit": "iter/sec",
            "range": "stddev: 0.000003626579752958634",
            "extra": "mean: 8.410903624086146 usec\nrounds: 21053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 113.97407748446153,
            "unit": "iter/sec",
            "range": "stddev: 0.004632678421861966",
            "extra": "mean: 8.773924931626082 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.83433076771675,
            "unit": "iter/sec",
            "range": "stddev: 0.002311535576342255",
            "extra": "mean: 38.70818288235382 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 69.75348295162019,
            "unit": "iter/sec",
            "range": "stddev: 0.0021782616835838943",
            "extra": "mean: 14.336201687499717 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4607.952807772053,
            "unit": "iter/sec",
            "range": "stddev: 0.00010100839084484796",
            "extra": "mean: 217.01611143094593 usec\nrounds: 1041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.511944114933744,
            "unit": "iter/sec",
            "range": "stddev: 0.01330713650658521",
            "extra": "mean: 661.4001074000157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1485963.9475080213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010304326672937234",
            "extra": "mean: 672.96383716241 nsec\nrounds: 75188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.39357616080342,
            "unit": "iter/sec",
            "range": "stddev: 0.0016795553249288825",
            "extra": "mean: 13.442020825003453 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1494.7458330968052,
            "unit": "iter/sec",
            "range": "stddev: 0.0001577482533941468",
            "extra": "mean: 669.0100603446448 usec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4050900.9153957353,
            "unit": "iter/sec",
            "range": "stddev: 7.177074091938442e-7",
            "extra": "mean: 246.85866696921354 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 187.5699204082543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006967367524384003",
            "extra": "mean: 5.331345227547442 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.81133024278051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011731320405613409",
            "extra": "mean: 28.726279433328727 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 816513.1365674502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026080665618988784",
            "extra": "mean: 1.2247200384355266 usec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 245.6769185912857,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649627614888186",
            "extra": "mean: 4.070386447917092 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.837610979128847,
            "unit": "iter/sec",
            "range": "stddev: 0.0010862263885761233",
            "extra": "mean: 40.26152115999821 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 92.47133044440798,
            "unit": "iter/sec",
            "range": "stddev: 0.0008514329449280024",
            "extra": "mean: 10.814162564700863 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 180.82835284853357,
            "unit": "iter/sec",
            "range": "stddev: 0.0007112575470738952",
            "extra": "mean: 5.530106226414755 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.86164234972935,
            "unit": "iter/sec",
            "range": "stddev: 0.001889497534010805",
            "extra": "mean: 13.915629636368397 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 66.73077572745285,
            "unit": "iter/sec",
            "range": "stddev: 0.0014343338917774762",
            "extra": "mean: 14.985589319151325 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.19308877435606,
            "unit": "iter/sec",
            "range": "stddev: 0.0017523664292813167",
            "extra": "mean: 14.66424263767986 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 71.17320295135148,
            "unit": "iter/sec",
            "range": "stddev: 0.0016227731617409907",
            "extra": "mean: 14.050231808220335 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 149.02637226120044,
            "unit": "iter/sec",
            "range": "stddev: 0.01771054982411801",
            "extra": "mean: 6.710221720000586 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.486760281461888,
            "unit": "iter/sec",
            "range": "stddev: 0.009517580173943108",
            "extra": "mean: 2.0543993380000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 140.48128303794934,
            "unit": "iter/sec",
            "range": "stddev: 0.00032914318475040844",
            "extra": "mean: 7.1183860111091235 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.77101726799033,
            "unit": "iter/sec",
            "range": "stddev: 0.0022451765990296325",
            "extra": "mean: 13.933200866667903 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.98018341300379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911148102917132",
            "extra": "mean: 14.496917093025374 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.78191514198143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006964475826244562",
            "extra": "mean: 32.4866076521719 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7169.526729739079,
            "unit": "iter/sec",
            "range": "stddev: 0.00007431378306997427",
            "extra": "mean: 139.4792205532921 usec\nrounds: 4525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 77.39162552101052,
            "unit": "iter/sec",
            "range": "stddev: 0.002197735510608977",
            "extra": "mean: 12.92129469135542 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.44352439424672,
            "unit": "iter/sec",
            "range": "stddev: 0.0014997557711395985",
            "extra": "mean: 13.80385629166625 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 158.058377124911,
            "unit": "iter/sec",
            "range": "stddev: 0.005760768777063333",
            "extra": "mean: 6.326776335364471 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 56.31102380400596,
            "unit": "iter/sec",
            "range": "stddev: 0.030358114277585512",
            "extra": "mean: 17.758512142854343 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0008441648131705,
            "unit": "iter/sec",
            "range": "stddev: 0.013406411884954051",
            "extra": "mean: 999.1565472000048 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1586.0775563081331,
            "unit": "iter/sec",
            "range": "stddev: 0.0003333579176834445",
            "extra": "mean: 630.4861928238056 usec\nrounds: 1115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 183.58406777765072,
            "unit": "iter/sec",
            "range": "stddev: 0.000737198510087066",
            "extra": "mean: 5.447095775278047 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4366435.666605736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012545765739044366",
            "extra": "mean: 229.01974891075685 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1317746.3783408345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015764828098375365",
            "extra": "mean: 758.8713704218966 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2103560.552001918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018739392613358864",
            "extra": "mean: 475.3844613830199 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 154.333170200775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006775528746535573",
            "extra": "mean: 6.479488490381431 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1602.566004030786,
            "unit": "iter/sec",
            "range": "stddev: 0.00014842465463259114",
            "extra": "mean: 623.9992596153872 usec\nrounds: 1040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1293.5427337359745,
            "unit": "iter/sec",
            "range": "stddev: 0.005262505339301871",
            "extra": "mean: 773.0707103211254 usec\nrounds: 1550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.4839116677518,
            "unit": "iter/sec",
            "range": "stddev: 0.0022265829121480554",
            "extra": "mean: 14.187634828126683 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3114.8736048411542,
            "unit": "iter/sec",
            "range": "stddev: 0.00009917674434391473",
            "extra": "mean: 321.0403139458995 usec\nrounds: 1513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.46877930384773,
            "unit": "iter/sec",
            "range": "stddev: 0.000499729118361089",
            "extra": "mean: 7.907089840706446 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6210.124647547568,
            "unit": "iter/sec",
            "range": "stddev: 0.00006689897843813564",
            "extra": "mean: 161.02736366087413 usec\nrounds: 3715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 60.39304083197821,
            "unit": "iter/sec",
            "range": "stddev: 0.0013717182505802107",
            "extra": "mean: 16.558199193548443 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 165.48131011830924,
            "unit": "iter/sec",
            "range": "stddev: 0.0009079741309302732",
            "extra": "mean: 6.04297850485387 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5029684174974792,
            "unit": "iter/sec",
            "range": "stddev: 0.022941534696825652",
            "extra": "mean: 1.9881964060000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0729560447592588,
            "unit": "iter/sec",
            "range": "stddev: 0.01779369918890646",
            "extra": "mean: 932.0046286000206 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 890.3533577266159,
            "unit": "iter/sec",
            "range": "stddev: 0.00006795548894533268",
            "extra": "mean: 1.1231495802445788 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10219.392843421967,
            "unit": "iter/sec",
            "range": "stddev: 0.00007357810406105642",
            "extra": "mean: 97.85317144782054 usec\nrounds: 5821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4263716.008950606,
            "unit": "iter/sec",
            "range": "stddev: 1.5716741764920745e-7",
            "extra": "mean: 234.5371966382375 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.4670981778549,
            "unit": "iter/sec",
            "range": "stddev: 0.0022320077103268254",
            "extra": "mean: 14.605555465522002 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.31304368596032,
            "unit": "iter/sec",
            "range": "stddev: 0.0017951324500645063",
            "extra": "mean: 14.42729891549337 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.295861940736419,
            "unit": "iter/sec",
            "range": "stddev: 0.0008581749909902868",
            "extra": "mean: 69.95031178571155 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 80.658862009216,
            "unit": "iter/sec",
            "range": "stddev: 0.0003862767457366531",
            "extra": "mean: 12.397893735293971 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5183946.807220839,
            "unit": "iter/sec",
            "range": "stddev: 1.3641685043404036e-7",
            "extra": "mean: 192.90321393872821 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.57753686718481,
            "unit": "iter/sec",
            "range": "stddev: 0.0016710721253846927",
            "extra": "mean: 28.10762318181608 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 67.48056645030482,
            "unit": "iter/sec",
            "range": "stddev: 0.0016898854875746334",
            "extra": "mean: 14.819081294115055 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.8898960921832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005275866053523886",
            "extra": "mean: 3.3015297403504484 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1559.2533999982609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364758794459679",
            "extra": "mean: 641.3325762195647 usec\nrounds: 984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.369638926206747,
            "unit": "iter/sec",
            "range": "stddev: 0.0015652361968884667",
            "extra": "mean: 57.571720647067245 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.8694333775297,
            "unit": "iter/sec",
            "range": "stddev: 0.00045060182412963017",
            "extra": "mean: 11.923295051948212 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.53367624387639,
            "unit": "iter/sec",
            "range": "stddev: 0.001395990353644748",
            "extra": "mean: 13.599211287675507 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1281.93527070764,
            "unit": "iter/sec",
            "range": "stddev: 0.00013243468893088178",
            "extra": "mean: 780.0705876888705 usec\nrounds: 861"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrick.cao8@gmail.com",
            "name": "patcao",
            "username": "patcao"
          },
          "committer": {
            "email": "jeff@reback.net",
            "name": "Jeff Reback",
            "username": "jreback"
          },
          "distinct": true,
          "id": "9cb920a35305ddd32decabbeae96dbaff7691ed2",
          "message": "feat: add dask windowing",
          "timestamp": "2023-05-23T09:37:11-04:00",
          "tree_id": "336c01ba7f4b6bddb698628a2f5f740919def785",
          "url": "https://github.com/ibis-project/ibis/commit/9cb920a35305ddd32decabbeae96dbaff7691ed2"
        },
        "date": 1684849317077,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.81451429518731,
            "unit": "iter/sec",
            "range": "stddev: 0.00760382953974294",
            "extra": "mean: 10.891524152542596 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.99893355302852,
            "unit": "iter/sec",
            "range": "stddev: 0.0007614160378720554",
            "extra": "mean: 10.00010664583447 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.068033640584755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817162588850396",
            "extra": "mean: 39.89144159999114 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.87085731069307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004471581060692895",
            "extra": "mean: 9.270344418602035 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.6230491640431,
            "unit": "iter/sec",
            "range": "stddev: 0.000026281995921052656",
            "extra": "mean: 1.346578188120718 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.761534678280082,
            "unit": "iter/sec",
            "range": "stddev: 0.00008854984294877324",
            "extra": "mean: 33.60041781480437 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 213.71656621222294,
            "unit": "iter/sec",
            "range": "stddev: 0.003694688253871589",
            "extra": "mean: 4.679094455443331 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.2811865383175,
            "unit": "iter/sec",
            "range": "stddev: 0.00027871226146167563",
            "extra": "mean: 3.606447348571952 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 395.91666931465187,
            "unit": "iter/sec",
            "range": "stddev: 0.000035445858489344456",
            "extra": "mean: 2.525784028571066 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.93945774342752,
            "unit": "iter/sec",
            "range": "stddev: 0.00016721513945162558",
            "extra": "mean: 21.304038181821994 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.24968838324998,
            "unit": "iter/sec",
            "range": "stddev: 0.058441065019365246",
            "extra": "mean: 16.064337444443787 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.45509627871127,
            "unit": "iter/sec",
            "range": "stddev: 0.0007797251038496597",
            "extra": "mean: 10.587041243907818 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 527.1919439192136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319344187544186",
            "extra": "mean: 1.8968423389892297 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.1673472580607,
            "unit": "iter/sec",
            "range": "stddev: 0.011602054457310846",
            "extra": "mean: 11.472185760563296 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1018245.4352461206,
            "unit": "iter/sec",
            "range": "stddev: 1.4296634853931787e-7",
            "extra": "mean: 982.0814956644413 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6274897.440867975,
            "unit": "iter/sec",
            "range": "stddev: 1.0334222544270619e-8",
            "extra": "mean: 159.36515447869894 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.90107899057047,
            "unit": "iter/sec",
            "range": "stddev: 0.012440980381854877",
            "extra": "mean: 11.77841332394686 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.5225225305837,
            "unit": "iter/sec",
            "range": "stddev: 0.00030364446365136475",
            "extra": "mean: 3.6033111506825453 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.67893281710948,
            "unit": "iter/sec",
            "range": "stddev: 0.0004934916445275614",
            "extra": "mean: 4.037485096636853 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1155.825463508061,
            "unit": "iter/sec",
            "range": "stddev: 0.00009397058405697463",
            "extra": "mean: 865.1825310760044 usec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17416147723512554,
            "unit": "iter/sec",
            "range": "stddev: 0.07085874061607385",
            "extra": "mean: 5.741797875599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.41328525663116,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647753150328263",
            "extra": "mean: 10.591729726190888 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 670.5838064783092,
            "unit": "iter/sec",
            "range": "stddev: 0.00005943740590478999",
            "extra": "mean: 1.4912379188690508 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.9405997532165,
            "unit": "iter/sec",
            "range": "stddev: 0.00010566052913690587",
            "extra": "mean: 9.620879640624302 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.29979187470663,
            "unit": "iter/sec",
            "range": "stddev: 0.02165471049072135",
            "extra": "mean: 25.445427374988228 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.89697529147142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010825867092577714",
            "extra": "mean: 6.949416399993424 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.65924463952817,
            "unit": "iter/sec",
            "range": "stddev: 0.0008189601811807796",
            "extra": "mean: 10.453772698794461 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.7752724818853,
            "unit": "iter/sec",
            "range": "stddev: 0.01579983515027321",
            "extra": "mean: 11.936696478262482 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.13909241429016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597132210523718",
            "extra": "mean: 19.179466954547955 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.53335385786745,
            "unit": "iter/sec",
            "range": "stddev: 0.00029132721304842273",
            "extra": "mean: 9.848980280902182 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.03407366680135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008438416478828748",
            "extra": "mean: 10.097534747126378 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 169.69607170772218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835001291568591",
            "extra": "mean: 5.892888326386014 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.48628136623957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007941368379095848",
            "extra": "mean: 28.17990393750769 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.510669963742636,
            "unit": "iter/sec",
            "range": "stddev: 0.00018957922735441564",
            "extra": "mean: 18.687861704545515 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2291.847046781594,
            "unit": "iter/sec",
            "range": "stddev: 0.00009478185329928469",
            "extra": "mean: 436.3292923078286 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4736.633303101639,
            "unit": "iter/sec",
            "range": "stddev: 0.000026233836682249146",
            "extra": "mean: 211.1204173954485 usec\nrounds: 2173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.01508442054697,
            "unit": "iter/sec",
            "range": "stddev: 0.000049505636645179725",
            "extra": "mean: 5.262740076923422 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.08962903994048,
            "unit": "iter/sec",
            "range": "stddev: 0.0004474410582993497",
            "extra": "mean: 26.253865558822003 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.328492432183785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007036039087594079",
            "extra": "mean: 429.4624221999925 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6704.834154070534,
            "unit": "iter/sec",
            "range": "stddev: 0.000014999706370006834",
            "extra": "mean: 149.14612010095664 usec\nrounds: 2781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.92298420851087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126842565106155",
            "extra": "mean: 10.007707515152712 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2330.4226607972755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008754616117134711",
            "extra": "mean: 429.10670962059896 usec\nrounds: 1715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8876736975258399,
            "unit": "iter/sec",
            "range": "stddev: 0.00606322743009617",
            "extra": "mean: 1.126540081999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1627350.2162633042,
            "unit": "iter/sec",
            "range": "stddev: 8.356655648874158e-8",
            "extra": "mean: 614.4958780269094 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.7295104583337,
            "unit": "iter/sec",
            "range": "stddev: 0.000773097167948032",
            "extra": "mean: 9.734301229884593 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.87434031393464,
            "unit": "iter/sec",
            "range": "stddev: 0.00065353009985829",
            "extra": "mean: 11.782123976471373 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4607587.393643582,
            "unit": "iter/sec",
            "range": "stddev: 1.8250015441255646e-8",
            "extra": "mean: 217.0333223367722 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 148.99604203825706,
            "unit": "iter/sec",
            "range": "stddev: 0.004252947201994534",
            "extra": "mean: 6.711587679243415 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1806716.5475438435,
            "unit": "iter/sec",
            "range": "stddev: 0.000005063543530663052",
            "extra": "mean: 553.4902535538619 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.99517443690837,
            "unit": "iter/sec",
            "range": "stddev: 0.0008783033314903885",
            "extra": "mean: 10.101502479167005 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2228.5918777597817,
            "unit": "iter/sec",
            "range": "stddev: 0.00010661520076988663",
            "extra": "mean: 448.7138313566937 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8895.733344004535,
            "unit": "iter/sec",
            "range": "stddev: 0.000018478987033718154",
            "extra": "mean: 112.41344151507991 usec\nrounds: 3907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.73580977188232,
            "unit": "iter/sec",
            "range": "stddev: 0.00018633786063711994",
            "extra": "mean: 5.242853983192709 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140605.5515409791,
            "unit": "iter/sec",
            "range": "stddev: 4.2782991394444273e-7",
            "extra": "mean: 7.112094714898599 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7428804.948502751,
            "unit": "iter/sec",
            "range": "stddev: 5.15630622487372e-9",
            "extra": "mean: 134.61115306335915 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3287156926856933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004824723842978556",
            "extra": "mean: 752.6064496000117 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.45235502910157,
            "unit": "iter/sec",
            "range": "stddev: 0.0002795610821294672",
            "extra": "mean: 3.578427527997974 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 158.10799694066154,
            "unit": "iter/sec",
            "range": "stddev: 0.00008709856040748946",
            "extra": "mean: 6.324790771812152 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.76893144322486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008599795627476522",
            "extra": "mean: 53.27953821052377 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.18076975102299,
            "unit": "iter/sec",
            "range": "stddev: 0.0009453426942893441",
            "extra": "mean: 10.185293948457565 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13001644.716177698,
            "unit": "iter/sec",
            "range": "stddev: 3.823773987278492e-9",
            "extra": "mean: 76.91334610573126 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.19297869770946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001440812111469338",
            "extra": "mean: 2.385536139242268 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5748141306488017,
            "unit": "iter/sec",
            "range": "stddev: 0.0014518841796489516",
            "extra": "mean: 634.9955722000118 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.77588734030343,
            "unit": "iter/sec",
            "range": "stddev: 0.00013185287622375426",
            "extra": "mean: 9.193213904764738 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2350.512122587232,
            "unit": "iter/sec",
            "range": "stddev: 0.00008657208515120107",
            "extra": "mean: 425.4392012661862 usec\nrounds: 1421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6337271.3181629,
            "unit": "iter/sec",
            "range": "stddev: 5.85626017898082e-9",
            "extra": "mean: 157.7966209422218 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2359.9042339286902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007819346243510638",
            "extra": "mean: 423.7460086824088 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.79691055808917,
            "unit": "iter/sec",
            "range": "stddev: 0.0009645845163772366",
            "extra": "mean: 10.661331956991186 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.7240845868635,
            "unit": "iter/sec",
            "range": "stddev: 0.0002788347636380846",
            "extra": "mean: 3.640015768926206 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 122.05432174302551,
            "unit": "iter/sec",
            "range": "stddev: 0.0002476602661887806",
            "extra": "mean: 8.193073262128406 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2578037.689141599,
            "unit": "iter/sec",
            "range": "stddev: 1.983997992170574e-8",
            "extra": "mean: 387.8919242381693 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.03853672121784,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179902202267421",
            "extra": "mean: 3.801724311825278 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8862814397545874,
            "unit": "iter/sec",
            "range": "stddev: 0.0047425753644706435",
            "extra": "mean: 1.1283097615999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5696137.634178721,
            "unit": "iter/sec",
            "range": "stddev: 1.1365553529953215e-8",
            "extra": "mean: 175.55755570250597 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7511595631397178,
            "unit": "iter/sec",
            "range": "stddev: 0.003719917052975355",
            "extra": "mean: 1.3312750700000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.53681212651304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882817761663715",
            "extra": "mean: 3.6692290931171327 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.8442292390155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889014435723111",
            "extra": "mean: 10.220326817202306 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2220.7511402696887,
            "unit": "iter/sec",
            "range": "stddev: 0.00010585348363290958",
            "extra": "mean: 450.298091428002 usec\nrounds: 1750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 80.09947252896598,
            "unit": "iter/sec",
            "range": "stddev: 0.019115553882517254",
            "extra": "mean: 12.48447671909918 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.412381192372045,
            "unit": "iter/sec",
            "range": "stddev: 0.0008380215888213271",
            "extra": "mean: 17.11965818867504 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9426.740866410884,
            "unit": "iter/sec",
            "range": "stddev: 0.000002137043275606144",
            "extra": "mean: 106.08120178238629 usec\nrounds: 4713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.52334599682585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008497795028242364",
            "extra": "mean: 9.8499511632651 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.46815552735268,
            "unit": "iter/sec",
            "range": "stddev: 0.0007455066850283968",
            "extra": "mean: 9.855308739996076 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.426416523685921,
            "unit": "iter/sec",
            "range": "stddev: 0.00013842393001151313",
            "extra": "mean: 118.67440888888974 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13424.550003096225,
            "unit": "iter/sec",
            "range": "stddev: 0.000002380662810174255",
            "extra": "mean: 74.49039258443382 usec\nrounds: 6689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2300.7523578430873,
            "unit": "iter/sec",
            "range": "stddev: 0.00008597507444013295",
            "extra": "mean: 434.6404325485432 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1886744.5828852842,
            "unit": "iter/sec",
            "range": "stddev: 1.1293757206471436e-7",
            "extra": "mean: 530.0134470086888 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1770.309377095518,
            "unit": "iter/sec",
            "range": "stddev: 0.000005397160686215689",
            "extra": "mean: 564.8730176420709 usec\nrounds: 1247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 228.13136145197527,
            "unit": "iter/sec",
            "range": "stddev: 0.00034325145746136424",
            "extra": "mean: 4.383439408046988 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2330.319163734182,
            "unit": "iter/sec",
            "range": "stddev: 0.00007993448097946281",
            "extra": "mean: 429.12576764702317 usec\nrounds: 1360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2234.42295541784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008591117655639881",
            "extra": "mean: 447.54284213527455 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.74092993237633,
            "unit": "iter/sec",
            "range": "stddev: 0.0003869118391987768",
            "extra": "mean: 3.7630635230127027 msec\nrounds: 239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "8bb9f5b5c32694c025a7b2fc2245b1b95c1246d8",
          "message": "chore(ci): list installed deps in backend tests",
          "timestamp": "2023-05-23T13:00:50-04:00",
          "tree_id": "c95280464c14846398bf93a26b3277effcced98d",
          "url": "https://github.com/ibis-project/ibis/commit/8bb9f5b5c32694c025a7b2fc2245b1b95c1246d8"
        },
        "date": 1684862149951,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.69447565559153,
            "unit": "iter/sec",
            "range": "stddev: 0.00010107091878309955",
            "extra": "mean: 9.11622936363456 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 91.76736653481247,
            "unit": "iter/sec",
            "range": "stddev: 0.008715667688289283",
            "extra": "mean: 10.897119943184208 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.3528324635629,
            "unit": "iter/sec",
            "range": "stddev: 0.00007467483063834201",
            "extra": "mean: 1.3398488710750893 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.68677577749291,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050950535706867",
            "extra": "mean: 8.95361150000643 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1740.749172299032,
            "unit": "iter/sec",
            "range": "stddev: 0.000011381670702656908",
            "extra": "mean: 574.4653025911172 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.64793149244076,
            "unit": "iter/sec",
            "range": "stddev: 0.00025163103231788447",
            "extra": "mean: 3.5254972413809056 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.073887838952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075553966683627",
            "extra": "mean: 3.6890310902764316 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.02824092798883,
            "unit": "iter/sec",
            "range": "stddev: 0.00007418309946825873",
            "extra": "mean: 9.612774291667847 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.16241789934494,
            "unit": "iter/sec",
            "range": "stddev: 0.0006906891967071538",
            "extra": "mean: 10.292045233332361 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2228.2167457322353,
            "unit": "iter/sec",
            "range": "stddev: 0.00009164358789943465",
            "extra": "mean: 448.78937469405855 usec\nrounds: 1636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1835063.8431485917,
            "unit": "iter/sec",
            "range": "stddev: 9.306037412843535e-8",
            "extra": "mean: 544.9401685579537 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9046100721126448,
            "unit": "iter/sec",
            "range": "stddev: 0.0032974660867016287",
            "extra": "mean: 1.1054486688000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.15768679393466,
            "unit": "iter/sec",
            "range": "stddev: 0.00047440499790973807",
            "extra": "mean: 4.344847282443025 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.1872689535235,
            "unit": "iter/sec",
            "range": "stddev: 0.00020868195248514209",
            "extra": "mean: 3.5064678857139597 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.32347590566053,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704664158116161",
            "extra": "mean: 3.542036299999912 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.462035383965,
            "unit": "iter/sec",
            "range": "stddev: 0.000024378022608477596",
            "extra": "mean: 1.878068169271237 msec\nrounds: 384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.4179173727806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004909455665146696",
            "extra": "mean: 10.05854906666741 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2187.4237968177054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006774090525039449",
            "extra": "mean: 457.15878260756506 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9396.67458230261,
            "unit": "iter/sec",
            "range": "stddev: 0.000002006775128406533",
            "extra": "mean: 106.42062691873647 usec\nrounds: 4495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6497983.859483197,
            "unit": "iter/sec",
            "range": "stddev: 8.955661801691896e-9",
            "extra": "mean: 153.89388795427584 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.79465709459447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007865143304173475",
            "extra": "mean: 10.438995559141976 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.74186951563563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037032571275934",
            "extra": "mean: 9.9263593658523 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1184.3106010184724,
            "unit": "iter/sec",
            "range": "stddev: 0.00001489844465934333",
            "extra": "mean: 844.3730885631095 usec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4582.23244190659,
            "unit": "iter/sec",
            "range": "stddev: 0.000026739836125585712",
            "extra": "mean: 218.2342368437156 usec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.9581312161402,
            "unit": "iter/sec",
            "range": "stddev: 0.00009174789316349621",
            "extra": "mean: 8.002680500001228 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.874512494032764,
            "unit": "iter/sec",
            "range": "stddev: 0.000174654137395239",
            "extra": "mean: 17.89724787499125 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1864009.6522875512,
            "unit": "iter/sec",
            "range": "stddev: 1.1095654126772015e-7",
            "extra": "mean: 536.4779086700432 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.57750702799393,
            "unit": "iter/sec",
            "range": "stddev: 0.004132828480196692",
            "extra": "mean: 5.96738797309444 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.57838266757386,
            "unit": "iter/sec",
            "range": "stddev: 0.00011954168922504698",
            "extra": "mean: 6.597246799981349 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13439.061789263375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004218020262219324",
            "extra": "mean: 74.40995626636018 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.10860279885176,
            "unit": "iter/sec",
            "range": "stddev: 0.0006690270609982322",
            "extra": "mean: 9.605354150531634 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3482491604853102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001630180314581404",
            "extra": "mean: 741.7026683999893 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.17197470759346,
            "unit": "iter/sec",
            "range": "stddev: 0.0006820775974726201",
            "extra": "mean: 9.98283205376599 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.693272144767754,
            "unit": "iter/sec",
            "range": "stddev: 0.02254740524725761",
            "extra": "mean: 25.193186300006687 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1855312.1064539354,
            "unit": "iter/sec",
            "range": "stddev: 9.699986904011266e-8",
            "extra": "mean: 538.9928716151719 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1622107.9719423754,
            "unit": "iter/sec",
            "range": "stddev: 9.898401779120287e-8",
            "extra": "mean: 616.4817738997738 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.67442151634457,
            "unit": "iter/sec",
            "range": "stddev: 0.0006031235375858758",
            "extra": "mean: 37.48909791304215 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4496769094667843,
            "unit": "iter/sec",
            "range": "stddev: 0.0030382953434089353",
            "extra": "mean: 408.21709839999585 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2278.4086198791483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000834297507314525",
            "extra": "mean: 438.9028338793075 usec\nrounds: 1222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2242.9473965889297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757852809324252",
            "extra": "mean: 445.8419317014737 usec\nrounds: 1757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.67658392224087,
            "unit": "iter/sec",
            "range": "stddev: 0.00010126242648155163",
            "extra": "mean: 6.223682229166311 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6096223009971273,
            "unit": "iter/sec",
            "range": "stddev: 0.0018333769666709283",
            "extra": "mean: 621.2637581999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5712900.075236553,
            "unit": "iter/sec",
            "range": "stddev: 9.896661831259315e-9",
            "extra": "mean: 175.04244548863028 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2348.4490728072124,
            "unit": "iter/sec",
            "range": "stddev: 0.00011141713476192858",
            "extra": "mean: 425.81293824040756 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.352745267038976,
            "unit": "iter/sec",
            "range": "stddev: 0.00007629938694983739",
            "extra": "mean: 51.67225559999338 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4704609.937319811,
            "unit": "iter/sec",
            "range": "stddev: 1.1769223609256563e-8",
            "extra": "mean: 212.55747305815484 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2277.5797557054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008116653428143404",
            "extra": "mean: 439.06256081481774 usec\nrounds: 1373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11725004.767516108,
            "unit": "iter/sec",
            "range": "stddev: 3.3101931139831324e-9",
            "extra": "mean: 85.28781180287214 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.11821279192068,
            "unit": "iter/sec",
            "range": "stddev: 0.0007137343475630304",
            "extra": "mean: 9.988192678572242 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.66805669509804,
            "unit": "iter/sec",
            "range": "stddev: 0.00007902573941493048",
            "extra": "mean: 5.136949620688236 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.485556389389785,
            "unit": "iter/sec",
            "range": "stddev: 0.00013216617798455442",
            "extra": "mean: 117.84731066667418 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.937621638297,
            "unit": "iter/sec",
            "range": "stddev: 0.0007666686435795113",
            "extra": "mean: 9.907108804122917 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.30989823537657,
            "unit": "iter/sec",
            "range": "stddev: 0.00019238884883495305",
            "extra": "mean: 17.149746959998993 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17812297136271155,
            "unit": "iter/sec",
            "range": "stddev: 0.07026367938311379",
            "extra": "mean: 5.614099025799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 75.71410271002625,
            "unit": "iter/sec",
            "range": "stddev: 0.013946881929663655",
            "extra": "mean: 13.207579093023808 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.816367383547,
            "unit": "iter/sec",
            "range": "stddev: 0.000751841495199061",
            "extra": "mean: 9.821603595745596 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.61249137094308,
            "unit": "iter/sec",
            "range": "stddev: 0.0008536807162660483",
            "extra": "mean: 10.03890161000129 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.47352986159086,
            "unit": "iter/sec",
            "range": "stddev: 0.003863108481474665",
            "extra": "mean: 4.057230813229955 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1084212.4085797095,
            "unit": "iter/sec",
            "range": "stddev: 1.3880530613842933e-7",
            "extra": "mean: 922.328495861779 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2351.864961474981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842551859278134",
            "extra": "mean: 425.1944802871871 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.81002406736843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007571862465418692",
            "extra": "mean: 10.329508846151274 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7686985832363143,
            "unit": "iter/sec",
            "range": "stddev: 0.004011946817329704",
            "extra": "mean: 1.3009000170000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1766.6321058124784,
            "unit": "iter/sec",
            "range": "stddev: 0.005254305015325706",
            "extra": "mean: 566.048809319073 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.30958987933003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487763658675478",
            "extra": "mean: 21.593799526312438 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9044.931451441096,
            "unit": "iter/sec",
            "range": "stddev: 0.000014794937894132318",
            "extra": "mean: 110.55915739866371 usec\nrounds: 3291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139837.68695577336,
            "unit": "iter/sec",
            "range": "stddev: 5.576913903210844e-7",
            "extra": "mean: 7.151148032906689 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.58350348082165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110153547976642",
            "extra": "mean: 9.941988153063996 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6258184.771018692,
            "unit": "iter/sec",
            "range": "stddev: 4.558144658273007e-9",
            "extra": "mean: 159.7907438960712 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.24694775973664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000366338524459331",
            "extra": "mean: 9.412035085105384 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8929513064858827,
            "unit": "iter/sec",
            "range": "stddev: 0.001688177849884202",
            "extra": "mean: 1.1198818935999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6657.773512061474,
            "unit": "iter/sec",
            "range": "stddev: 0.00001751160436276834",
            "extra": "mean: 150.20036325783119 usec\nrounds: 3119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.08511050609351,
            "unit": "iter/sec",
            "range": "stddev: 0.00015747541670377085",
            "extra": "mean: 14.90643739655415 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7352614.091486451,
            "unit": "iter/sec",
            "range": "stddev: 4.726509936278389e-9",
            "extra": "mean: 136.00605003304213 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.99732846369704,
            "unit": "iter/sec",
            "range": "stddev: 0.015765034600036077",
            "extra": "mean: 11.363981355553832 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.9657639657852,
            "unit": "iter/sec",
            "range": "stddev: 0.00006184849431066329",
            "extra": "mean: 1.4881710551713727 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.70882778564434,
            "unit": "iter/sec",
            "range": "stddev: 0.00013311781639217625",
            "extra": "mean: 20.117151108696937 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.079764677736662,
            "unit": "iter/sec",
            "range": "stddev: 0.00012517165543743654",
            "extra": "mean: 33.24494093333594 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.0657130192129,
            "unit": "iter/sec",
            "range": "stddev: 0.0002456332734742285",
            "extra": "mean: 3.6223259638563103 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2295.5570156882886,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312962557897158",
            "extra": "mean: 435.6241178789301 usec\nrounds: 1773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.34735757469774,
            "unit": "iter/sec",
            "range": "stddev: 0.0008060070789501951",
            "extra": "mean: 10.487967631578805 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.15741014669537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758894881863533",
            "extra": "mean: 27.65684809677652 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.56968391702796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793487721981848",
            "extra": "mean: 9.472416350000117 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.58360917548538,
            "unit": "iter/sec",
            "range": "stddev: 0.0007668116739859741",
            "extra": "mean: 9.941977705883751 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.7706071488029,
            "unit": "iter/sec",
            "range": "stddev: 0.00022580365007203804",
            "extra": "mean: 3.6660841520013037 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.58255295411917,
            "unit": "iter/sec",
            "range": "stddev: 0.01032523185289273",
            "extra": "mean: 4.617177082642662 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 393.4172878279135,
            "unit": "iter/sec",
            "range": "stddev: 0.00002610206906407831",
            "extra": "mean: 2.5418303438597607 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.83453527220072,
            "unit": "iter/sec",
            "range": "stddev: 0.0007991181424070972",
            "extra": "mean: 9.917237157889614 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.62430886504643,
            "unit": "iter/sec",
            "range": "stddev: 0.000055330091673321516",
            "extra": "mean: 5.245920659090524 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.97489289938244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006147602490052654",
            "extra": "mean: 5.814802283872165 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.7741818366574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002434921847398895",
            "extra": "mean: 3.6000466040002266 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.42935710947097,
            "unit": "iter/sec",
            "range": "stddev: 0.000038104085453195226",
            "extra": "mean: 2.323261607236679 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.05753000903613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006571368902536787",
            "extra": "mean: 9.798395080808447 msec\nrounds: 99"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "47656807ef4d58bde42a3317adeeedf0e538d06d",
          "message": "chore(conda-lock): relock",
          "timestamp": "2023-05-23T17:48:00Z",
          "tree_id": "07428c977aabd2a49f6971d796d955fcdd7cf0e0",
          "url": "https://github.com/ibis-project/ibis/commit/47656807ef4d58bde42a3317adeeedf0e538d06d"
        },
        "date": 1684864456762,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 549.7102441843952,
            "unit": "iter/sec",
            "range": "stddev: 0.00011894424005226217",
            "extra": "mean: 1.8191401935463283 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4582848.081618398,
            "unit": "iter/sec",
            "range": "stddev: 7.386676873401006e-7",
            "extra": "mean: 218.20492021339132 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6307309500019885,
            "unit": "iter/sec",
            "range": "stddev: 0.00908272570042768",
            "extra": "mean: 1.5854620738000051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 167.05771480860486,
            "unit": "iter/sec",
            "range": "stddev: 0.00043770529979876864",
            "extra": "mean: 5.98595522000096 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.01085151185222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003442261645334372",
            "extra": "mean: 4.032081636364249 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.888852165828,
            "unit": "iter/sec",
            "range": "stddev: 0.0004543209073682001",
            "extra": "mean: 4.810262741757425 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.30882210466262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001836468281114392",
            "extra": "mean: 7.733424400004196 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1367796.4503210466,
            "unit": "iter/sec",
            "range": "stddev: 0.000004338494737104334",
            "extra": "mean: 731.1029355027804 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7610.414547851342,
            "unit": "iter/sec",
            "range": "stddev: 0.000059222107998907875",
            "extra": "mean: 131.39888684281084 usec\nrounds: 3747"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9549825.82482537,
            "unit": "iter/sec",
            "range": "stddev: 9.86006209561675e-8",
            "extra": "mean: 104.71395168283638 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 324.7805556843917,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738226756996525",
            "extra": "mean: 3.079002059999425 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.784237126104678,
            "unit": "iter/sec",
            "range": "stddev: 0.0022819381802849066",
            "extra": "mean: 50.545289849995356 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 177.58643955528518,
            "unit": "iter/sec",
            "range": "stddev: 0.008485376032773956",
            "extra": "mean: 5.631060583816063 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 196.8104993424005,
            "unit": "iter/sec",
            "range": "stddev: 0.000641945129112845",
            "extra": "mean: 5.081029738460511 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.23151357670714,
            "unit": "iter/sec",
            "range": "stddev: 0.0016636368834280232",
            "extra": "mean: 13.844372774191388 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 397.23388728971366,
            "unit": "iter/sec",
            "range": "stddev: 0.00014265523195318742",
            "extra": "mean: 2.517408589742678 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.63619838792877,
            "unit": "iter/sec",
            "range": "stddev: 0.0011588937191112615",
            "extra": "mean: 12.716789729162533 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 2898.5300702498375,
            "unit": "iter/sec",
            "range": "stddev: 0.00459462529511874",
            "extra": "mean: 345.0024584060311 usec\nrounds: 1154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.9564402340503,
            "unit": "iter/sec",
            "range": "stddev: 0.0007502088969156459",
            "extra": "mean: 10.421395349398843 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1606.6366761537954,
            "unit": "iter/sec",
            "range": "stddev: 0.00014937663253819706",
            "extra": "mean: 622.4182572465282 usec\nrounds: 1104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 144.3423506624272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005409048165230004",
            "extra": "mean: 6.927973636363284 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.00284518809482,
            "unit": "iter/sec",
            "range": "stddev: 0.0013525839292618015",
            "extra": "mean: 12.820045186667434 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.66769463781647,
            "unit": "iter/sec",
            "range": "stddev: 0.0017105321340304175",
            "extra": "mean: 23.999407903225517 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4441617.311537357,
            "unit": "iter/sec",
            "range": "stddev: 2.493333712545489e-7",
            "extra": "mean: 225.14321470291299 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3163.9732289841263,
            "unit": "iter/sec",
            "range": "stddev: 0.00010351595125463055",
            "extra": "mean: 316.0583000005583 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1553438.5874971626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004974151088070877",
            "extra": "mean: 643.7332045492443 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 195.85846823148168,
            "unit": "iter/sec",
            "range": "stddev: 0.000636022996840694",
            "extra": "mean: 5.105727666664468 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 127.06533202815565,
            "unit": "iter/sec",
            "range": "stddev: 0.0008132698369947072",
            "extra": "mean: 7.86996723684172 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1025038162871854,
            "unit": "iter/sec",
            "range": "stddev: 0.015934521500004222",
            "extra": "mean: 907.0263388000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 199.15033282713657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388032296116623",
            "extra": "mean: 5.021332306122757 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.798781392919413,
            "unit": "iter/sec",
            "range": "stddev: 0.0023243665190113747",
            "extra": "mean: 42.01895817646861 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.68733578631995,
            "unit": "iter/sec",
            "range": "stddev: 0.0013219548284413415",
            "extra": "mean: 12.241799666668385 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.671087876482723,
            "unit": "iter/sec",
            "range": "stddev: 0.03208731200250386",
            "extra": "mean: 32.603995137934355 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 77.95181603370874,
            "unit": "iter/sec",
            "range": "stddev: 0.0013610631181338653",
            "extra": "mean: 12.828437500000891 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.3830418804777,
            "unit": "iter/sec",
            "range": "stddev: 0.0012246933210107497",
            "extra": "mean: 13.091911180557267 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.8220156274475,
            "unit": "iter/sec",
            "range": "stddev: 0.0007064226995523229",
            "extra": "mean: 6.81096765853864 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6388642091776231,
            "unit": "iter/sec",
            "range": "stddev: 0.02484233746967141",
            "extra": "mean: 1.5652778565999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1255.8717865507838,
            "unit": "iter/sec",
            "range": "stddev: 0.005236626580516593",
            "extra": "mean: 796.2596267461918 usec\nrounds: 1002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 535.572651459805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002164796212123596",
            "extra": "mean: 1.8671603138702284 msec\nrounds: 411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.8641673247763,
            "unit": "iter/sec",
            "range": "stddev: 0.0006689761323257225",
            "extra": "mean: 11.512226857146993 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1617.6433043568404,
            "unit": "iter/sec",
            "range": "stddev: 0.00019129212297312777",
            "extra": "mean: 618.1832529499391 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 182.3357910371192,
            "unit": "iter/sec",
            "range": "stddev: 0.0006666459175973299",
            "extra": "mean: 5.4843867696629225 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.062075097103115,
            "unit": "iter/sec",
            "range": "stddev: 0.0019421828274337747",
            "extra": "mean: 35.63528344000588 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4337935.9215231165,
            "unit": "iter/sec",
            "range": "stddev: 3.54481044958299e-7",
            "extra": "mean: 230.52438258434486 nsec\nrounds: 68023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1636.7193190854543,
            "unit": "iter/sec",
            "range": "stddev: 0.00013907216285784498",
            "extra": "mean: 610.9783078498564 usec\nrounds: 981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.495633149289226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701818848193433",
            "extra": "mean: 28.989176562500774 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1603.3031884956226,
            "unit": "iter/sec",
            "range": "stddev: 0.00016508021493635058",
            "extra": "mean: 623.7123503373674 usec\nrounds: 1039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 853595.2709283477,
            "unit": "iter/sec",
            "range": "stddev: 0.000012340165732690647",
            "extra": "mean: 1.1715153938381435 usec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 78.27051749400123,
            "unit": "iter/sec",
            "range": "stddev: 0.0012790680830024233",
            "extra": "mean: 12.776202739130241 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10684.259240602718,
            "unit": "iter/sec",
            "range": "stddev: 0.00003794551043233902",
            "extra": "mean: 93.59563236726444 usec\nrounds: 5938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5315036897938561,
            "unit": "iter/sec",
            "range": "stddev: 0.013997784498524967",
            "extra": "mean: 1.8814544832000137 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1524435.8476934955,
            "unit": "iter/sec",
            "range": "stddev: 0.000008498778448831373",
            "extra": "mean: 655.9803756340561 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 72.94185129711829,
            "unit": "iter/sec",
            "range": "stddev: 0.0015232054381524437",
            "extra": "mean: 13.709550583335783 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.08502851755433,
            "unit": "iter/sec",
            "range": "stddev: 0.0031506986564371242",
            "extra": "mean: 36.920766000001834 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1607.9663022797608,
            "unit": "iter/sec",
            "range": "stddev: 0.00018244723131821046",
            "extra": "mean: 621.9035800577466 usec\nrounds: 1043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.202488242284368,
            "unit": "iter/sec",
            "range": "stddev: 0.013006558312111675",
            "extra": "mean: 161.225617999995 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.25899679936111,
            "unit": "iter/sec",
            "range": "stddev: 0.001277318519071932",
            "extra": "mean: 13.287447913582728 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 174.14562886127916,
            "unit": "iter/sec",
            "range": "stddev: 0.0046155242927229485",
            "extra": "mean: 5.7423204161878765 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1535.4392266615607,
            "unit": "iter/sec",
            "range": "stddev: 0.0009400422213385049",
            "extra": "mean: 651.2794401991779 usec\nrounds: 1204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 124.17364916487364,
            "unit": "iter/sec",
            "range": "stddev: 0.005292907467743462",
            "extra": "mean: 8.053238402233257 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.2340258731724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005663110322886574",
            "extra": "mean: 7.394588703125926 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10781191988690164,
            "unit": "iter/sec",
            "range": "stddev: 0.15353565755058238",
            "extra": "mean: 9.27541222760001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2225720.204617395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016634317253514835",
            "extra": "mean: 449.2927718072729 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 63.700068989577524,
            "unit": "iter/sec",
            "range": "stddev: 0.01916880644137025",
            "extra": "mean: 15.698570124996536 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.63299919106414,
            "unit": "iter/sec",
            "range": "stddev: 0.0025091213118546745",
            "extra": "mean: 13.221741973682667 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 76.91038386396946,
            "unit": "iter/sec",
            "range": "stddev: 0.0013839597320757918",
            "extra": "mean: 13.002145481014487 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1342.4892840524858,
            "unit": "iter/sec",
            "range": "stddev: 0.00012568753918305886",
            "extra": "mean: 744.8849029031834 usec\nrounds: 999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 205.0468691413997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006345817330651888",
            "extra": "mean: 4.876933767325181 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 77.6176279931196,
            "unit": "iter/sec",
            "range": "stddev: 0.0013437855075093057",
            "extra": "mean: 12.883671220777899 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.4513229402879,
            "unit": "iter/sec",
            "range": "stddev: 0.0012750966685773045",
            "extra": "mean: 11.434932787498298 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.1277775206209,
            "unit": "iter/sec",
            "range": "stddev: 0.0018139800105291721",
            "extra": "mean: 21.218908520828233 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 60.86307729477499,
            "unit": "iter/sec",
            "range": "stddev: 0.0013811650785625525",
            "extra": "mean: 16.430322692307385 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.7101573442829,
            "unit": "iter/sec",
            "range": "stddev: 0.0014575334099209537",
            "extra": "mean: 13.036083285710122 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 63.75135794690521,
            "unit": "iter/sec",
            "range": "stddev: 0.020820817517046317",
            "extra": "mean: 15.685940381581231 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0815056638160563,
            "unit": "iter/sec",
            "range": "stddev: 0.00961652824166914",
            "extra": "mean: 480.421464799997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125293.95844671507,
            "unit": "iter/sec",
            "range": "stddev: 0.000007687821017097506",
            "extra": "mean: 7.98123079833318 usec\nrounds: 36898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1701.8502244865103,
            "unit": "iter/sec",
            "range": "stddev: 0.00017330159034477597",
            "extra": "mean: 587.5957740650911 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0824171001995544,
            "unit": "iter/sec",
            "range": "stddev: 0.01484607268727346",
            "extra": "mean: 923.8582796000173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.40981578196917,
            "unit": "iter/sec",
            "range": "stddev: 0.001233319166761945",
            "extra": "mean: 13.087323791663627 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1692.9665980099035,
            "unit": "iter/sec",
            "range": "stddev: 0.0001685149683525594",
            "extra": "mean: 590.6791080081015 usec\nrounds: 1361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.557485944642764,
            "unit": "iter/sec",
            "range": "stddev: 0.002244093813882921",
            "extra": "mean: 22.442917925000927 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1600935.5333423498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010992730955256703",
            "extra": "mean: 624.6347708406797 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 902.6851082281222,
            "unit": "iter/sec",
            "range": "stddev: 0.00010261208998230528",
            "extra": "mean: 1.107806023257542 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 80.39929042932366,
            "unit": "iter/sec",
            "range": "stddev: 0.0014310837639051447",
            "extra": "mean: 12.437920716216603 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7030.216657019755,
            "unit": "iter/sec",
            "range": "stddev: 0.00004009513823507577",
            "extra": "mean: 142.24312688876924 usec\nrounds: 2979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 203.2253995946716,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459410086600523",
            "extra": "mean: 4.920644771738558 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5737739.725836211,
            "unit": "iter/sec",
            "range": "stddev: 1.9940586689684875e-7",
            "extra": "mean: 174.2846569873208 nsec\nrounds: 55246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 88.19527343713612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840297432847139",
            "extra": "mean: 11.338476100000763 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 78.04538159972567,
            "unit": "iter/sec",
            "range": "stddev: 0.0012625309954852055",
            "extra": "mean: 12.813057986297485 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.94249104691373,
            "unit": "iter/sec",
            "range": "stddev: 0.0010450154021352173",
            "extra": "mean: 12.508992238097216 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.86043719358401,
            "unit": "iter/sec",
            "range": "stddev: 0.0018879518293857243",
            "extra": "mean: 67.29277120001218 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 82.64538600710671,
            "unit": "iter/sec",
            "range": "stddev: 0.0006143837843794128",
            "extra": "mean: 12.099889035717126 msec\nrounds: 56"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "fc66380681877c9a3b82dc497faef77a434d15c1",
          "message": "test(graphviz): make graphviz CLI optional for tests",
          "timestamp": "2023-05-23T14:46:06-04:00",
          "tree_id": "38d402a0b9388c731bbce746b2a5ede325d88b09",
          "url": "https://github.com/ibis-project/ibis/commit/fc66380681877c9a3b82dc497faef77a434d15c1"
        },
        "date": 1684867850054,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1577205.9579696294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017482263728610903",
            "extra": "mean: 634.0326036349248 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.86533731243385,
            "unit": "iter/sec",
            "range": "stddev: 0.0040594031477696356",
            "extra": "mean: 8.205778788731672 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 656.6719392205878,
            "unit": "iter/sec",
            "range": "stddev: 0.008975946237179271",
            "extra": "mean: 1.5228304123774692 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 78.59534794278025,
            "unit": "iter/sec",
            "range": "stddev: 0.001356748969096985",
            "extra": "mean: 12.723399363637014 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 71.75607315121029,
            "unit": "iter/sec",
            "range": "stddev: 0.01175205368433667",
            "extra": "mean: 13.936102633329975 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 888036.0957072636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019197786996129763",
            "extra": "mean: 1.1260803528527346 usec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.7102658253669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006854477814181401",
            "extra": "mean: 5.109594000001533 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1623.41733324269,
            "unit": "iter/sec",
            "range": "stddev: 0.00017918695453035205",
            "extra": "mean: 615.9845527844359 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4732.880933168102,
            "unit": "iter/sec",
            "range": "stddev: 0.000018499060434320688",
            "extra": "mean: 211.2877999934426 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6017225772162113,
            "unit": "iter/sec",
            "range": "stddev: 0.030122434523182105",
            "extra": "mean: 1.6618954280000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 72.63413711710236,
            "unit": "iter/sec",
            "range": "stddev: 0.013660534976560303",
            "extra": "mean: 13.767631029852781 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.759357864925974,
            "unit": "iter/sec",
            "range": "stddev: 0.002656369907229129",
            "extra": "mean: 36.02388804762313 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 202.75274701150482,
            "unit": "iter/sec",
            "range": "stddev: 0.00037623215072325023",
            "extra": "mean: 4.932115666690606 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5310121182201113,
            "unit": "iter/sec",
            "range": "stddev: 0.03731519807147446",
            "extra": "mean: 1.8831961940000155 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.75803987276485,
            "unit": "iter/sec",
            "range": "stddev: 0.015271551772773298",
            "extra": "mean: 14.543753746477892 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0528416403599132,
            "unit": "iter/sec",
            "range": "stddev: 0.06815129934410903",
            "extra": "mean: 949.8104573999854 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6761.925067087141,
            "unit": "iter/sec",
            "range": "stddev: 0.000047498982205410556",
            "extra": "mean: 147.88687985724363 usec\nrounds: 2805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.058739126773144,
            "unit": "iter/sec",
            "range": "stddev: 0.00324356247540707",
            "extra": "mean: 66.4066222000012 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 81.08893355812904,
            "unit": "iter/sec",
            "range": "stddev: 0.0013876967132833372",
            "extra": "mean: 12.332138999992452 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.32401534230564,
            "unit": "iter/sec",
            "range": "stddev: 0.0012073017856364756",
            "extra": "mean: 7.026221102565755 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 389.84101829783185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004747815266942144",
            "extra": "mean: 2.5651482349556587 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.01977447644121,
            "unit": "iter/sec",
            "range": "stddev: 0.0015882226507168509",
            "extra": "mean: 12.655060162164066 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 259.7647066172429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005079568535564371",
            "extra": "mean: 3.849637670268564 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.046712613875973,
            "unit": "iter/sec",
            "range": "stddev: 0.003421108357799506",
            "extra": "mean: 141.910143749989 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5594494.026758343,
            "unit": "iter/sec",
            "range": "stddev: 2.920246405395216e-7",
            "extra": "mean: 178.74717449285725 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 919.6972756337457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001584251768555001",
            "extra": "mean: 1.0873143005788717 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7878.437804602402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000720843880260027",
            "extra": "mean: 126.92871668236347 usec\nrounds: 4112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0688706325338362,
            "unit": "iter/sec",
            "range": "stddev: 0.02364423997903589",
            "extra": "mean: 935.5669147999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.73787110628942,
            "unit": "iter/sec",
            "range": "stddev: 0.0018049521699760851",
            "extra": "mean: 11.020756689658393 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6050117750277577,
            "unit": "iter/sec",
            "range": "stddev: 0.015582657471627381",
            "extra": "mean: 1.652860392599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 130.25567842986052,
            "unit": "iter/sec",
            "range": "stddev: 0.0005818842207651679",
            "extra": "mean: 7.67720848760137 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2350595.0413082712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012176391322175732",
            "extra": "mean: 425.42419363031996 nsec\nrounds: 55246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.223803744268416,
            "unit": "iter/sec",
            "range": "stddev: 0.0037085492324782244",
            "extra": "mean: 52.01884149998932 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 204.70954392063865,
            "unit": "iter/sec",
            "range": "stddev: 0.00044495385162005485",
            "extra": "mean: 4.884970093957505 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10899.98738871598,
            "unit": "iter/sec",
            "range": "stddev: 0.00004443304400980479",
            "extra": "mean: 91.74322541283236 usec\nrounds: 5084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1267.2847963941274,
            "unit": "iter/sec",
            "range": "stddev: 0.005094529794148805",
            "extra": "mean: 789.0886112145848 usec\nrounds: 1070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 82.55960941536175,
            "unit": "iter/sec",
            "range": "stddev: 0.0004983801505636258",
            "extra": "mean: 12.112460403839211 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 179.45651258794766,
            "unit": "iter/sec",
            "range": "stddev: 0.004345296608946434",
            "extra": "mean: 5.572380659687244 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 528.3600443580962,
            "unit": "iter/sec",
            "range": "stddev: 0.00025336294633303345",
            "extra": "mean: 1.8926487925764686 msec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.32545098973542,
            "unit": "iter/sec",
            "range": "stddev: 0.0015180971797101807",
            "extra": "mean: 12.449354316451798 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1760.8964016970347,
            "unit": "iter/sec",
            "range": "stddev: 0.00014703306802723876",
            "extra": "mean: 567.8925796181234 usec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.01163256917059,
            "unit": "iter/sec",
            "range": "stddev: 0.0019745158989304297",
            "extra": "mean: 29.40170537142746 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.02876784115635,
            "unit": "iter/sec",
            "range": "stddev: 0.012901149917602125",
            "extra": "mean: 492.9100213999959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.56863105251952,
            "unit": "iter/sec",
            "range": "stddev: 0.000911285793055987",
            "extra": "mean: 5.447553834586787 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.67935310258369,
            "unit": "iter/sec",
            "range": "stddev: 0.002863009905836014",
            "extra": "mean: 15.22548491666953 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.35463245849911,
            "unit": "iter/sec",
            "range": "stddev: 0.0012575416664493033",
            "extra": "mean: 11.447589805555936 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1105999882137839,
            "unit": "iter/sec",
            "range": "stddev: 0.044696637785694375",
            "extra": "mean: 9.041592283600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1679.0997344162524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002602079480645047",
            "extra": "mean: 595.5572379074047 usec\nrounds: 1261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 76.25592693023412,
            "unit": "iter/sec",
            "range": "stddev: 0.00206293924321902",
            "extra": "mean: 13.11373476470742 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.13711553668725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005979001167311582",
            "extra": "mean: 4.804525119998289 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 77.0808311025709,
            "unit": "iter/sec",
            "range": "stddev: 0.0016119914049474338",
            "extra": "mean: 12.973394107145879 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1592.565729644802,
            "unit": "iter/sec",
            "range": "stddev: 0.00023684708326695018",
            "extra": "mean: 627.9175681012771 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.6708555258077,
            "unit": "iter/sec",
            "range": "stddev: 0.0027572465662024145",
            "extra": "mean: 32.60424213333598 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1411166.4501069093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016249934851856907",
            "extra": "mean: 708.6336271134 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1592.857943272457,
            "unit": "iter/sec",
            "range": "stddev: 0.00019419495422826912",
            "extra": "mean: 627.8023751104532 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.61510049545138,
            "unit": "iter/sec",
            "range": "stddev: 0.0018075887363976043",
            "extra": "mean: 19.756949807693594 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.45593715683641,
            "unit": "iter/sec",
            "range": "stddev: 0.0014092871635321073",
            "extra": "mean: 13.613603456789221 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.09106752467056,
            "unit": "iter/sec",
            "range": "stddev: 0.0013356605782804526",
            "extra": "mean: 12.643652833337645 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 152.35932532820857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006927577382491588",
            "extra": "mean: 6.563431531649445 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4956618.765305439,
            "unit": "iter/sec",
            "range": "stddev: 1.7328289366258828e-7",
            "extra": "mean: 201.7504366080772 nsec\nrounds: 47617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.28143654677697,
            "unit": "iter/sec",
            "range": "stddev: 0.0012004435878195108",
            "extra": "mean: 11.865008962501378 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 93.38511573120451,
            "unit": "iter/sec",
            "range": "stddev: 0.0008554033199682653",
            "extra": "mean: 10.708344602563376 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 168.2744092311314,
            "unit": "iter/sec",
            "range": "stddev: 0.01632977492666212",
            "extra": "mean: 5.94267425789302 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1783.7312997023807,
            "unit": "iter/sec",
            "range": "stddev: 0.00018176009543596408",
            "extra": "mean: 560.6225557441595 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4562528.933508001,
            "unit": "iter/sec",
            "range": "stddev: 5.017842068910701e-7",
            "extra": "mean: 219.1766922628926 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.98774041634329,
            "unit": "iter/sec",
            "range": "stddev: 0.0013807190817631094",
            "extra": "mean: 12.822528190474895 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 70.9428789808773,
            "unit": "iter/sec",
            "range": "stddev: 0.001348108507026968",
            "extra": "mean: 14.095847453125643 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.90413827711563,
            "unit": "iter/sec",
            "range": "stddev: 0.0014936901052578892",
            "extra": "mean: 13.531042013511296 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 52.51595947450605,
            "unit": "iter/sec",
            "range": "stddev: 0.024396925610296473",
            "extra": "mean: 19.041830521737904 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 595.2501205153827,
            "unit": "iter/sec",
            "range": "stddev: 0.00046078265032981086",
            "extra": "mean: 1.6799660605430444 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1592617.2994786492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022824050953491435",
            "extra": "mean: 627.897235781223 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.2551874937082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619220372583666",
            "extra": "mean: 7.339170114504276 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1621.6736709852914,
            "unit": "iter/sec",
            "range": "stddev: 0.0001944976858064775",
            "extra": "mean: 616.6468740856002 usec\nrounds: 1231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.69840069094034,
            "unit": "iter/sec",
            "range": "stddev: 0.0027370313600006157",
            "extra": "mean: 28.012459400002854 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1379.2249736686595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001738771357504669",
            "extra": "mean: 725.0448759929695 usec\nrounds: 1008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8973770.534648664,
            "unit": "iter/sec",
            "range": "stddev: 1.4606045100151724e-7",
            "extra": "mean: 111.43587816725112 nsec\nrounds: 92585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.11726928771904,
            "unit": "iter/sec",
            "range": "stddev: 0.0019028721495024312",
            "extra": "mean: 13.492132260270633 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.27507098510225,
            "unit": "iter/sec",
            "range": "stddev: 0.0008725862478587468",
            "extra": "mean: 10.17552050561828 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.3914209023778,
            "unit": "iter/sec",
            "range": "stddev: 0.002957418825513066",
            "extra": "mean: 24.757732648645966 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4765930.475544664,
            "unit": "iter/sec",
            "range": "stddev: 8.015099329023853e-7",
            "extra": "mean: 209.82261598890858 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.9722109393434,
            "unit": "iter/sec",
            "range": "stddev: 0.0006523911281183484",
            "extra": "mean: 7.753608259614216 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 325.8436359393318,
            "unit": "iter/sec",
            "range": "stddev: 0.00030389796825701945",
            "extra": "mean: 3.068956670328182 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 210.9733565717735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006268826865507994",
            "extra": "mean: 4.739935014778979 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3375.0477206872883,
            "unit": "iter/sec",
            "range": "stddev: 0.00010409919846801456",
            "extra": "mean: 296.2921068850434 usec\nrounds: 2077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.84631649433754,
            "unit": "iter/sec",
            "range": "stddev: 0.0011879826620075813",
            "extra": "mean: 22.298375388896513 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 197.21693948985245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006977263327068272",
            "extra": "mean: 5.070558353591395 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 88.11188431153333,
            "unit": "iter/sec",
            "range": "stddev: 0.0009351198075374643",
            "extra": "mean: 11.34920683870911 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 173.47695093909323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005296090869455546",
            "extra": "mean: 5.764454554836477 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.79846826801979,
            "unit": "iter/sec",
            "range": "stddev: 0.027311782754949922",
            "extra": "mean: 15.674357506499405 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2195450.5681958958,
            "unit": "iter/sec",
            "range": "stddev: 8.217391921866691e-7",
            "extra": "mean: 455.48736759841665 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.233251896500647,
            "unit": "iter/sec",
            "range": "stddev: 0.0024387166503804423",
            "extra": "mean: 41.265613227269874 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 133288.8352470323,
            "unit": "iter/sec",
            "range": "stddev: 0.000005480088230240373",
            "extra": "mean: 7.502503852979429 usec\nrounds: 34129"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "0bd3c01f0f492aa83987f5b0dd2cbc05a0eef128",
          "message": "feat(polars): add any and all reductions",
          "timestamp": "2023-05-23T15:38:28-04:00",
          "tree_id": "efd19351facd59cf6966c45f911de6acc23e4f82",
          "url": "https://github.com/ibis-project/ibis/commit/0bd3c01f0f492aa83987f5b0dd2cbc05a0eef128"
        },
        "date": 1684870928932,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1912431.0750687236,
            "unit": "iter/sec",
            "range": "stddev: 1.3371410875793863e-7",
            "extra": "mean: 522.8946616881681 nsec\nrounds: 84034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1049.0239304387433,
            "unit": "iter/sec",
            "range": "stddev: 0.0061534880474173135",
            "extra": "mean: 953.2671000000547 usec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10014.785553823554,
            "unit": "iter/sec",
            "range": "stddev: 0.000003646568203183446",
            "extra": "mean: 99.85236275161269 usec\nrounds: 4521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.12092976936148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008810324885920274",
            "extra": "mean: 10.738724392859515 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1736460.1773062528,
            "unit": "iter/sec",
            "range": "stddev: 1.243637696094293e-7",
            "extra": "mean: 575.884211494724 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6787.668164512729,
            "unit": "iter/sec",
            "range": "stddev: 0.000020353543174231786",
            "extra": "mean: 147.32599999926302 usec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.74451427365314,
            "unit": "iter/sec",
            "range": "stddev: 0.00047231847687639845",
            "extra": "mean: 9.9260987777825 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.85922443900962,
            "unit": "iter/sec",
            "range": "stddev: 0.001033962490545711",
            "extra": "mean: 10.218760732395197 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8466628810314732,
            "unit": "iter/sec",
            "range": "stddev: 0.010248421744461065",
            "extra": "mean: 1.1811076431999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2155.55866792825,
            "unit": "iter/sec",
            "range": "stddev: 0.00010115985100207314",
            "extra": "mean: 463.91685593095906 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8575320714473528,
            "unit": "iter/sec",
            "range": "stddev: 0.012034373787758169",
            "extra": "mean: 1.1661371432000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6174094.38502665,
            "unit": "iter/sec",
            "range": "stddev: 9.428460884439695e-9",
            "extra": "mean: 161.96707365297004 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.4893301491106,
            "unit": "iter/sec",
            "range": "stddev: 0.0003009893236952588",
            "extra": "mean: 3.565198004032422 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6286963.348401179,
            "unit": "iter/sec",
            "range": "stddev: 5.217901664678143e-9",
            "extra": "mean: 159.05930169836236 nsec\nrounds: 45044"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11652974.013030611,
            "unit": "iter/sec",
            "range": "stddev: 5.126311876071396e-9",
            "extra": "mean: 85.81500300967606 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.5032740786904,
            "unit": "iter/sec",
            "range": "stddev: 0.00033971950591611926",
            "extra": "mean: 9.132147037735034 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1146.1703638279528,
            "unit": "iter/sec",
            "range": "stddev: 0.00001649312341395933",
            "extra": "mean: 872.4706479586713 usec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5568998.266570212,
            "unit": "iter/sec",
            "range": "stddev: 1.1322175247173348e-8",
            "extra": "mean: 179.56550749919788 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1060330.4318118934,
            "unit": "iter/sec",
            "range": "stddev: 1.8106229689099996e-7",
            "extra": "mean: 943.1022349242578 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.81903322690876,
            "unit": "iter/sec",
            "range": "stddev: 0.015370008721576987",
            "extra": "mean: 12.373322967034074 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.43451114150978,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175305501176342",
            "extra": "mean: 19.827692930227627 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.09691576132463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005913889941782842",
            "extra": "mean: 22.17446543999813 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.500373834221506,
            "unit": "iter/sec",
            "range": "stddev: 0.00021483265017199066",
            "extra": "mean: 117.64188487500604 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.634671175807,
            "unit": "iter/sec",
            "range": "stddev: 0.00028205471466794354",
            "extra": "mean: 3.6814151730755365 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.54445002579256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007903663979000259",
            "extra": "mean: 29.811190800000986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.8391067390139,
            "unit": "iter/sec",
            "range": "stddev: 0.00008595052915439839",
            "extra": "mean: 6.856871399997999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.85517600724681,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458896303692059",
            "extra": "mean: 10.542387269658342 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.34278024954574,
            "unit": "iter/sec",
            "range": "stddev: 0.00030860229605208524",
            "extra": "mean: 3.579831199169237 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13884.695259024355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016240992027874176",
            "extra": "mean: 72.02174634333802 usec\nrounds: 6836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.46639258335483,
            "unit": "iter/sec",
            "range": "stddev: 0.00032181456184458655",
            "extra": "mean: 3.630206903360832 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 229.53159099776622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865032616011032",
            "extra": "mean: 4.356698769232737 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.16715527500466,
            "unit": "iter/sec",
            "range": "stddev: 0.00011753146688353366",
            "extra": "mean: 5.808308782256917 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.31061345858377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004325764587379054",
            "extra": "mean: 9.065310840424717 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.59549356272838,
            "unit": "iter/sec",
            "range": "stddev: 0.00033408558681158643",
            "extra": "mean: 22.42379039024183 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 200.29720534265476,
            "unit": "iter/sec",
            "range": "stddev: 0.004012212014989962",
            "extra": "mean: 4.992580891427159 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1921396.7314366566,
            "unit": "iter/sec",
            "range": "stddev: 1.0288300868841638e-7",
            "extra": "mean: 520.4547211092034 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.93040328906585,
            "unit": "iter/sec",
            "range": "stddev: 0.00034285567412585083",
            "extra": "mean: 3.559600485715464 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.91292512019121,
            "unit": "iter/sec",
            "range": "stddev: 0.00021781718553188305",
            "extra": "mean: 33.43036483332753 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.578909336317753,
            "unit": "iter/sec",
            "range": "stddev: 0.0023834658605879325",
            "extra": "mean: 633.3485888000041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 246.51053954895553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306319801589405",
            "extra": "mean: 4.056621683720772 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.25479583846997,
            "unit": "iter/sec",
            "range": "stddev: 0.0009371081821962397",
            "extra": "mean: 9.876075416667499 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.61511963981718,
            "unit": "iter/sec",
            "range": "stddev: 0.0009491855467898833",
            "extra": "mean: 10.14043286315942 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2104.157209938048,
            "unit": "iter/sec",
            "range": "stddev: 0.00011614336065445076",
            "extra": "mean: 475.24966066078434 usec\nrounds: 1665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.54865740253862,
            "unit": "iter/sec",
            "range": "stddev: 0.0008986784005154983",
            "extra": "mean: 9.945433642108007 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 660.4293138698707,
            "unit": "iter/sec",
            "range": "stddev: 0.00003480535652929473",
            "extra": "mean: 1.514166586792417 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.30966674690742,
            "unit": "iter/sec",
            "range": "stddev: 0.019258840897170677",
            "extra": "mean: 12.14924126803821 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.3550306325319,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684292475539984",
            "extra": "mean: 3.7827916404967348 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.39561231310599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002372116037533403",
            "extra": "mean: 12.13656858571507 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.95852410459005,
            "unit": "iter/sec",
            "range": "stddev: 0.000041599556086228246",
            "extra": "mean: 5.103120696429946 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.24217204596405,
            "unit": "iter/sec",
            "range": "stddev: 0.0008979303119128822",
            "extra": "mean: 10.178928042553204 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.53573960598241,
            "unit": "iter/sec",
            "range": "stddev: 0.0008538105367717032",
            "extra": "mean: 9.658500570002388 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2121.6718092624487,
            "unit": "iter/sec",
            "range": "stddev: 0.00009377421492308958",
            "extra": "mean: 471.3264302397586 usec\nrounds: 1541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.28404261289408,
            "unit": "iter/sec",
            "range": "stddev: 0.0008474552156711747",
            "extra": "mean: 10.49493674468297 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.395450788253726,
            "unit": "iter/sec",
            "range": "stddev: 0.00033815716754144107",
            "extra": "mean: 19.843060918369282 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.046718884084086,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925591470122262",
            "extra": "mean: 19.981329891299254 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 79.68675966149085,
            "unit": "iter/sec",
            "range": "stddev: 0.023852551702150407",
            "extra": "mean: 12.549136195874915 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2151.804364926941,
            "unit": "iter/sec",
            "range": "stddev: 0.00012657914089540085",
            "extra": "mean: 464.7262624332265 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3379705752226703,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543847732351074",
            "extra": "mean: 747.4005919999968 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 523.3159502931669,
            "unit": "iter/sec",
            "range": "stddev: 0.00003563470222409164",
            "extra": "mean: 1.9108914976503006 msec\nrounds: 426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2696056.3327821805,
            "unit": "iter/sec",
            "range": "stddev: 1.6411778395813186e-8",
            "extra": "mean: 370.91213111586586 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 311.9984664124032,
            "unit": "iter/sec",
            "range": "stddev: 0.00004010692985241556",
            "extra": "mean: 3.205143959516097 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 433.36896185365123,
            "unit": "iter/sec",
            "range": "stddev: 0.00003379587516855649",
            "extra": "mean: 2.307502585609027 msec\nrounds: 403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2096.1380118739567,
            "unit": "iter/sec",
            "range": "stddev: 0.0000915818489431718",
            "extra": "mean: 477.06782393874704 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.73470558288788,
            "unit": "iter/sec",
            "range": "stddev: 0.01980037839022395",
            "extra": "mean: 12.234704864580337 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.04964190061985,
            "unit": "iter/sec",
            "range": "stddev: 0.00012001653628551283",
            "extra": "mean: 9.51930898485147 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148188.998937556,
            "unit": "iter/sec",
            "range": "stddev: 3.8368316202832175e-7",
            "extra": "mean: 6.74813924899635 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4453.264843764153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003401586616768017",
            "extra": "mean: 224.55435171350445 usec\nrounds: 1868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.7703901550333,
            "unit": "iter/sec",
            "range": "stddev: 0.00032433185727708783",
            "extra": "mean: 3.5616291285125508 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1785.4344570145133,
            "unit": "iter/sec",
            "range": "stddev: 0.000007677879557148204",
            "extra": "mean: 560.087768033857 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.00237406160613,
            "unit": "iter/sec",
            "range": "stddev: 0.00017781451132308472",
            "extra": "mean: 52.62500342104503 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.62832083451879,
            "unit": "iter/sec",
            "range": "stddev: 0.0009513902548460851",
            "extra": "mean: 10.037306577323386 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.68296189467557,
            "unit": "iter/sec",
            "range": "stddev: 0.0009812623723602482",
            "extra": "mean: 10.133461550001925 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2110.488977078181,
            "unit": "iter/sec",
            "range": "stddev: 0.00009598903519381933",
            "extra": "mean: 473.82384407637494 usec\nrounds: 1629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.1063929442591,
            "unit": "iter/sec",
            "range": "stddev: 0.00009434770702784203",
            "extra": "mean: 7.9931966422015535 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.515947661324542,
            "unit": "iter/sec",
            "range": "stddev: 0.00276303967563762",
            "extra": "mean: 397.46454799999356 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 79.58627446618483,
            "unit": "iter/sec",
            "range": "stddev: 0.02241328028272152",
            "extra": "mean: 12.564980666671197 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.117461955203932,
            "unit": "iter/sec",
            "range": "stddev: 0.0008212799156267673",
            "extra": "mean: 43.257343818182065 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 159.53542852261864,
            "unit": "iter/sec",
            "range": "stddev: 0.00011900063303109725",
            "extra": "mean: 6.268200168830974 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.51799109114114,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330939740614948",
            "extra": "mean: 5.332821635839521 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2099.622452548873,
            "unit": "iter/sec",
            "range": "stddev: 0.00008892016576613466",
            "extra": "mean: 476.2761032518169 usec\nrounds: 1230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16879770412995057,
            "unit": "iter/sec",
            "range": "stddev: 0.0941571370086444",
            "extra": "mean: 5.924251192599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.29144538576841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008980259417643579",
            "extra": "mean: 10.07136109374566 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9595.222260120185,
            "unit": "iter/sec",
            "range": "stddev: 0.000031391984410447877",
            "extra": "mean: 104.21853427577346 usec\nrounds: 4172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.81620851943549,
            "unit": "iter/sec",
            "range": "stddev: 0.0010551881832070841",
            "extra": "mean: 10.659138924728921 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 146.1042272029724,
            "unit": "iter/sec",
            "range": "stddev: 0.003795848078523521",
            "extra": "mean: 6.844428933673287 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7670733380579078,
            "unit": "iter/sec",
            "range": "stddev: 0.0018085134255397101",
            "extra": "mean: 1.3036563133999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.0457299506933,
            "unit": "iter/sec",
            "range": "stddev: 0.000013534253461260775",
            "extra": "mean: 1.3350319747044364 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 81.15127281963886,
            "unit": "iter/sec",
            "range": "stddev: 0.0007599465049853774",
            "extra": "mean: 12.322665625005413 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4495457.603092579,
            "unit": "iter/sec",
            "range": "stddev: 1.1490438309042889e-8",
            "extra": "mean: 222.44676477655682 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2070.769282366254,
            "unit": "iter/sec",
            "range": "stddev: 0.000165825930657292",
            "extra": "mean: 482.91232080539004 usec\nrounds: 1144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7172062.067687997,
            "unit": "iter/sec",
            "range": "stddev: 4.314039716599653e-9",
            "extra": "mean: 139.4299143764587 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.25309641524774,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126592219761604",
            "extra": "mean: 29.194440931035093 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "d6a1117e6ee126d8f69dbc5fafa04c255063d077",
          "message": "feat(bigquery): enable group_concat over windows\n\nThis \"just worked\" once I removed `ops.GroupConcat` from the list of\nunsupported reductions in the base sql window registry.\n\nUpdate ibis/backends/tests/test_aggregation.py\n\nCo-authored-by: Jim Crist-Harif <jcristharif@gmail.com>",
          "timestamp": "2023-05-23T16:19:03-05:00",
          "tree_id": "0b8bb0bd50b96450df07327a819b19a8ec95f243",
          "url": "https://github.com/ibis-project/ibis/commit/d6a1117e6ee126d8f69dbc5fafa04c255063d077"
        },
        "date": 1684877059645,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2253.2046202633987,
            "unit": "iter/sec",
            "range": "stddev: 0.00009468394622215114",
            "extra": "mean: 443.8123333348661 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.70762226641581,
            "unit": "iter/sec",
            "range": "stddev: 0.015108821680055203",
            "extra": "mean: 25.18408161764415 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3565827958502958,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684314593383118",
            "extra": "mean: 737.1463084000027 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.2643797387702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007425497280658402",
            "extra": "mean: 5.255844532607644 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.11694945934386,
            "unit": "iter/sec",
            "range": "stddev: 0.0001325491109390007",
            "extra": "mean: 7.9925222307705415 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.69190968800157,
            "unit": "iter/sec",
            "range": "stddev: 0.00007811832302962686",
            "extra": "mean: 9.372781899998728 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.22237106797013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007301354071913636",
            "extra": "mean: 9.782594451219254 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 229.85954633548192,
            "unit": "iter/sec",
            "range": "stddev: 0.00032737161085259086",
            "extra": "mean: 4.350482788043493 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.02263902080679,
            "unit": "iter/sec",
            "range": "stddev: 0.0007478861683428183",
            "extra": "mean: 9.89877130208446 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2284.1826724597117,
            "unit": "iter/sec",
            "range": "stddev: 0.00008612791320342961",
            "extra": "mean: 437.79335692234923 usec\nrounds: 1625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 384.43841431806896,
            "unit": "iter/sec",
            "range": "stddev: 0.000042622792733668815",
            "extra": "mean: 2.6011968699169588 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6211708.623599124,
            "unit": "iter/sec",
            "range": "stddev: 7.626956448101048e-9",
            "extra": "mean: 160.98630193306724 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.28920817014043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441288703054213",
            "extra": "mean: 10.385379826086295 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.45511312349076,
            "unit": "iter/sec",
            "range": "stddev: 0.009079812597617393",
            "extra": "mean: 10.816059449998363 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.30171609362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007927117560005833",
            "extra": "mean: 5.200161601850505 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.2234997227798,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537220783987606",
            "extra": "mean: 3.6734521487614225 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.68019039030708,
            "unit": "iter/sec",
            "range": "stddev: 0.0007200309851164031",
            "extra": "mean: 9.645044016947415 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.9785399003254,
            "unit": "iter/sec",
            "range": "stddev: 0.000261829751860266",
            "extra": "mean: 3.623470145037972 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.2183872257943,
            "unit": "iter/sec",
            "range": "stddev: 0.00001623565232445013",
            "extra": "mean: 1.327636203469668 msec\nrounds: 634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9203226481717885,
            "unit": "iter/sec",
            "range": "stddev: 0.0041497096859760465",
            "extra": "mean: 1.0865754547999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.082717841037734,
            "unit": "iter/sec",
            "range": "stddev: 0.00017122324476270983",
            "extra": "mean: 20.37376991304069 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.68471330767439,
            "unit": "iter/sec",
            "range": "stddev: 0.0009745448543060813",
            "extra": "mean: 22.379017923076944 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.767398598522,
            "unit": "iter/sec",
            "range": "stddev: 0.00026451483869551645",
            "extra": "mean: 3.613142317569697 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.06909394854364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006097164355982716",
            "extra": "mean: 9.609000732671356 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.26011799554176,
            "unit": "iter/sec",
            "range": "stddev: 0.0008107785242520587",
            "extra": "mean: 9.974055686274644 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.14154711321466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734392448166097",
            "extra": "mean: 10.086588611110237 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.54586090922429,
            "unit": "iter/sec",
            "range": "stddev: 0.000151179568769442",
            "extra": "mean: 18.003141613634323 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2552896.526543141,
            "unit": "iter/sec",
            "range": "stddev: 1.485246905496013e-8",
            "extra": "mean: 391.71192001041237 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2565645.475259084,
            "unit": "iter/sec",
            "range": "stddev: 1.4408972499736788e-8",
            "extra": "mean: 389.765464341453 nsec\nrounds: 117661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.02263190550664,
            "unit": "iter/sec",
            "range": "stddev: 0.00145612410181477",
            "extra": "mean: 37.006017899989274 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2347.7016544892163,
            "unit": "iter/sec",
            "range": "stddev: 0.00007902490170884314",
            "extra": "mean: 425.948500776419 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5900106.9727834305,
            "unit": "iter/sec",
            "range": "stddev: 8.756625788297396e-9",
            "extra": "mean: 169.48845243193384 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 674.3022109286479,
            "unit": "iter/sec",
            "range": "stddev: 0.00002909275117575596",
            "extra": "mean: 1.4830145649719904 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.85602971916524,
            "unit": "iter/sec",
            "range": "stddev: 0.00006761725549524115",
            "extra": "mean: 6.140392847132746 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.27994186661533,
            "unit": "iter/sec",
            "range": "stddev: 0.00045171267117823013",
            "extra": "mean: 15.318641092592758 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.70996822534548,
            "unit": "iter/sec",
            "range": "stddev: 0.000056587452920933226",
            "extra": "mean: 5.790053754715753 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2380.688635729173,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545033069310906",
            "extra": "mean: 420.0465298116205 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.46111576724465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006528878947900393",
            "extra": "mean: 6.4741213025217705 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.79666376022754,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587014351350642",
            "extra": "mean: 27.176376818185116 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9136.14380789852,
            "unit": "iter/sec",
            "range": "stddev: 0.000014882448405765387",
            "extra": "mean: 109.45536990513051 usec\nrounds: 3901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2380.165791107387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008044195094785987",
            "extra": "mean: 420.1388003037989 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.065272041823,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694070376060584",
            "extra": "mean: 3.7304347272703873 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.36241414864749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000805065687797442",
            "extra": "mean: 10.166484918606995 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 429.17409117955384,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236636404065258",
            "extra": "mean: 2.330056777778856 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2569937.3140323656,
            "unit": "iter/sec",
            "range": "stddev: 1.4158674993637946e-8",
            "extra": "mean: 389.1145494248777 nsec\nrounds: 117661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6607820833882831,
            "unit": "iter/sec",
            "range": "stddev: 0.0007839889510715504",
            "extra": "mean: 602.1259562000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.38190222345513,
            "unit": "iter/sec",
            "range": "stddev: 0.015291680909119063",
            "extra": "mean: 11.712083872093581 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.6646491265473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007677800538999092",
            "extra": "mean: 1.8738359410478231 msec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.530276224591,
            "unit": "iter/sec",
            "range": "stddev: 0.00418428159368786",
            "extra": "mean: 5.86406133936583 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2394.2101217551226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008117752311959979",
            "extra": "mean: 417.6742846893198 usec\nrounds: 1254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.3743002931733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000535885040720367",
            "extra": "mean: 839.3667714285259 usec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.769830150374915,
            "unit": "iter/sec",
            "range": "stddev: 0.00015027942521308443",
            "extra": "mean: 17.01553326666575 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4642514.38557855,
            "unit": "iter/sec",
            "range": "stddev: 9.684235092151027e-9",
            "extra": "mean: 215.40051725138454 nsec\nrounds: 181852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4722304929869354,
            "unit": "iter/sec",
            "range": "stddev: 0.001374448280930081",
            "extra": "mean: 404.4930287999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.46464938133818,
            "unit": "iter/sec",
            "range": "stddev: 0.00019333173498742553",
            "extra": "mean: 9.135369323810966 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 112.27742946511347,
            "unit": "iter/sec",
            "range": "stddev: 0.00013428428332350575",
            "extra": "mean: 8.906509569768135 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.91210324844523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591893802057794",
            "extra": "mean: 9.812377216493722 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.31563478132549,
            "unit": "iter/sec",
            "range": "stddev: 0.0007633280949214267",
            "extra": "mean: 10.491458219779101 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.46610929859084,
            "unit": "iter/sec",
            "range": "stddev: 0.017066888031008302",
            "extra": "mean: 11.83906786170253 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.470972215495484,
            "unit": "iter/sec",
            "range": "stddev: 0.001131045837087877",
            "extra": "mean: 118.05020422222077 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13548.763546065431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017986465886460446",
            "extra": "mean: 73.8074730288138 usec\nrounds: 6748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2383.1641459402404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007939583677210891",
            "extra": "mean: 419.6102067511869 usec\nrounds: 1422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6473341.735190042,
            "unit": "iter/sec",
            "range": "stddev: 7.349855262320245e-9",
            "extra": "mean: 154.47971710868472 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2270.2660978865347,
            "unit": "iter/sec",
            "range": "stddev: 0.00010287423651168711",
            "extra": "mean: 440.477000000543 usec\nrounds: 1398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12513029.220024846,
            "unit": "iter/sec",
            "range": "stddev: 3.0890477693212416e-9",
            "extra": "mean: 79.91669981868688 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.3034075241764,
            "unit": "iter/sec",
            "range": "stddev: 0.00026945911536475724",
            "extra": "mean: 3.6192097989689125 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9140452064489363,
            "unit": "iter/sec",
            "range": "stddev: 0.005579288982234185",
            "extra": "mean: 1.094037792599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.99064520509509,
            "unit": "iter/sec",
            "range": "stddev: 0.0007954072641200156",
            "extra": "mean: 10.000935567010867 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.5496444671892,
            "unit": "iter/sec",
            "range": "stddev: 0.000004860239201409655",
            "extra": "mean: 569.2978864274162 usec\nrounds: 1083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1604743.4006912769,
            "unit": "iter/sec",
            "range": "stddev: 1.0527336280280101e-7",
            "extra": "mean: 623.1525859955112 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.177154907265203,
            "unit": "iter/sec",
            "range": "stddev: 0.06485676159727544",
            "extra": "mean: 5.644777305000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.358647410916,
            "unit": "iter/sec",
            "range": "stddev: 0.00025165174988395786",
            "extra": "mean: 3.6851598780477004 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138572.78283174185,
            "unit": "iter/sec",
            "range": "stddev: 3.796564737376801e-7",
            "extra": "mean: 7.2164243191552435 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.40647190232414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270096996207963",
            "extra": "mean: 3.7820556842096344 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.25224483315353,
            "unit": "iter/sec",
            "range": "stddev: 0.0007802118044812713",
            "extra": "mean: 9.876324239999121 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.52148694646723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005877752162958166",
            "extra": "mean: 11.557822632182942 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6667.121470411952,
            "unit": "iter/sec",
            "range": "stddev: 0.000026701538130182343",
            "extra": "mean: 149.9897676137902 usec\nrounds: 3236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.07419502643293,
            "unit": "iter/sec",
            "range": "stddev: 0.0007912288708159967",
            "extra": "mean: 10.408622208334606 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.58243144143347,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224807289057201",
            "extra": "mean: 10.041931950497926 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.05841806057148,
            "unit": "iter/sec",
            "range": "stddev: 0.0007727983846328263",
            "extra": "mean: 9.895266709999646 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7267698.699729835,
            "unit": "iter/sec",
            "range": "stddev: 3.784332606568086e-9",
            "extra": "mean: 137.5951372388764 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4711.5515848302475,
            "unit": "iter/sec",
            "range": "stddev: 0.000044805620280565005",
            "extra": "mean: 212.24430678413745 usec\nrounds: 2034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.2479098452821,
            "unit": "iter/sec",
            "range": "stddev: 0.00006942322272760725",
            "extra": "mean: 9.592518463767131 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.824658535962346,
            "unit": "iter/sec",
            "range": "stddev: 0.00004950844021456645",
            "extra": "mean: 33.5293025666734 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2315.958807235522,
            "unit": "iter/sec",
            "range": "stddev: 0.00008464748306494199",
            "extra": "mean: 431.78660901731 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9430.056165542246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019045534353439755",
            "extra": "mean: 106.04390710354778 usec\nrounds: 4941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.66247210318159,
            "unit": "iter/sec",
            "range": "stddev: 0.004013638824756863",
            "extra": "mean: 4.12095035269728 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.7987809400163,
            "unit": "iter/sec",
            "range": "stddev: 0.00036816710711740644",
            "extra": "mean: 4.019312298162318 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7946721946522682,
            "unit": "iter/sec",
            "range": "stddev: 0.0029572984973186543",
            "extra": "mean: 1.2583805080000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.103109511166007,
            "unit": "iter/sec",
            "range": "stddev: 0.000454198948037695",
            "extra": "mean: 52.347498684205696 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1079383.1607235086,
            "unit": "iter/sec",
            "range": "stddev: 1.1286165804283936e-7",
            "extra": "mean: 926.4550684019396 nsec\nrounds: 98049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.79209893977132,
            "unit": "iter/sec",
            "range": "stddev: 0.018686185819666776",
            "extra": "mean: 12.377447957447885 msec\nrounds: 94"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0b97631d08982c3f3ee72d34e682257c917ec042",
          "message": "chore(flake/nixpkgs): `33bd20c0` -> `499cad7a`",
          "timestamp": "2023-05-24T00:38:04Z",
          "tree_id": "7c4eb4acbdd9adb8e4f06bbc7f8c3d1c10e1b9a3",
          "url": "https://github.com/ibis-project/ibis/commit/0b97631d08982c3f3ee72d34e682257c917ec042"
        },
        "date": 1684889036591,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 151.93084406052668,
            "unit": "iter/sec",
            "range": "stddev: 0.009117669211444114",
            "extra": "mean: 6.5819419761902775 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.83463158350924,
            "unit": "iter/sec",
            "range": "stddev: 0.003933061292098302",
            "extra": "mean: 7.255070721425584 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1486.9007663830103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006965980052749708",
            "extra": "mean: 672.5398376332604 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 344.8975384814883,
            "unit": "iter/sec",
            "range": "stddev: 0.00022233936158302958",
            "extra": "mean: 2.899411820689677 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 217.04996757931073,
            "unit": "iter/sec",
            "range": "stddev: 0.00038667070734757806",
            "extra": "mean: 4.607234044550579 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1127546924725316,
            "unit": "iter/sec",
            "range": "stddev: 0.00562018373411819",
            "extra": "mean: 473.3157160000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 129541.58932409686,
            "unit": "iter/sec",
            "range": "stddev: 0.000015520487323573006",
            "extra": "mean: 7.719528571616681 usec\nrounds: 41667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.7863032592471,
            "unit": "iter/sec",
            "range": "stddev: 0.0003368474428158191",
            "extra": "mean: 11.014877400001902 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1386595.3116347922,
            "unit": "iter/sec",
            "range": "stddev: 0.000001160238248935673",
            "extra": "mean: 721.1909571661557 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 199.29962247478204,
            "unit": "iter/sec",
            "range": "stddev: 0.000436365463935207",
            "extra": "mean: 5.017570969691791 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.97508627610537,
            "unit": "iter/sec",
            "range": "stddev: 0.016085400178257568",
            "extra": "mean: 14.290800529408898 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.44019370613111,
            "unit": "iter/sec",
            "range": "stddev: 0.0010262784645369797",
            "extra": "mean: 12.130005462682817 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11271057977784102,
            "unit": "iter/sec",
            "range": "stddev: 0.06061558110173493",
            "extra": "mean: 8.872281572599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.39614651544548,
            "unit": "iter/sec",
            "range": "stddev: 0.0007709816248428324",
            "extra": "mean: 44.65053840000337 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.67778629667708,
            "unit": "iter/sec",
            "range": "stddev: 0.0010823348478549116",
            "extra": "mean: 12.394985607595773 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 154.60341848547338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003085294637962368",
            "extra": "mean: 6.46816228124969 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1689255.7714561475,
            "unit": "iter/sec",
            "range": "stddev: 9.982615221068143e-7",
            "extra": "mean: 591.976666232133 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 925132.9962970425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012912348637049452",
            "extra": "mean: 1.0809256658260185 usec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3209.4269707819503,
            "unit": "iter/sec",
            "range": "stddev: 0.000049189290080050413",
            "extra": "mean: 311.5821014479598 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 218.72053782680652,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209696349071354",
            "extra": "mean: 4.5720443536575806 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.114931488522547,
            "unit": "iter/sec",
            "range": "stddev: 0.051056499108043156",
            "extra": "mean: 896.9160978000104 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.8452268344779,
            "unit": "iter/sec",
            "range": "stddev: 0.0008873341788489934",
            "extra": "mean: 11.383657781250278 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.04628277306126,
            "unit": "iter/sec",
            "range": "stddev: 0.02585518984822298",
            "extra": "mean: 30.260589575756526 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.114226043418947,
            "unit": "iter/sec",
            "range": "stddev: 0.011783802111285147",
            "extra": "mean: 897.4839583999938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.87503486412899,
            "unit": "iter/sec",
            "range": "stddev: 0.0004030560111592321",
            "extra": "mean: 9.62695224418479 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 217.63681958920623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003756624869508088",
            "extra": "mean: 4.594810758067131 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.38026634088096,
            "unit": "iter/sec",
            "range": "stddev: 0.0009382587094759335",
            "extra": "mean: 21.560893864867047 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5425105351764639,
            "unit": "iter/sec",
            "range": "stddev: 0.03764022232235015",
            "extra": "mean: 1.8432821763999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.768455665863202,
            "unit": "iter/sec",
            "range": "stddev: 0.0035485870861196003",
            "extra": "mean: 63.41775131250671 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7120.051377863122,
            "unit": "iter/sec",
            "range": "stddev: 0.00003526496476869772",
            "extra": "mean: 140.44842472753632 usec\nrounds: 2936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.1838534724492,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935783629993697",
            "extra": "mean: 26.893393411764986 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9310969.199849023,
            "unit": "iter/sec",
            "range": "stddev: 6.01657481654278e-8",
            "extra": "mean: 107.40020491276066 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4613848.227528184,
            "unit": "iter/sec",
            "range": "stddev: 3.0219194129373454e-7",
            "extra": "mean: 216.73881555820583 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 78.64078219723957,
            "unit": "iter/sec",
            "range": "stddev: 0.015878535704217416",
            "extra": "mean: 12.716048493666964 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1597.3737270201577,
            "unit": "iter/sec",
            "range": "stddev: 0.00012152548022999284",
            "extra": "mean: 626.0275745648224 usec\nrounds: 1093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.21854886611493,
            "unit": "iter/sec",
            "range": "stddev: 0.000990345926780789",
            "extra": "mean: 12.016551761901507 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.91655308886487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743215077123743",
            "extra": "mean: 7.411988945058021 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.63738275036559,
            "unit": "iter/sec",
            "range": "stddev: 0.001330539468343521",
            "extra": "mean: 12.880392983047733 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1691.8585528428532,
            "unit": "iter/sec",
            "range": "stddev: 0.00013027719478471607",
            "extra": "mean: 591.0659601653379 usec\nrounds: 1456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2260857.223947179,
            "unit": "iter/sec",
            "range": "stddev: 2.767954885328483e-7",
            "extra": "mean: 442.31010671886145 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11286.889503860311,
            "unit": "iter/sec",
            "range": "stddev: 0.00002990217623259166",
            "extra": "mean: 88.59836890030533 usec\nrounds: 4836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.03422642939717,
            "unit": "iter/sec",
            "range": "stddev: 0.0010652562235234952",
            "extra": "mean: 12.494654407413535 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.93806437002013,
            "unit": "iter/sec",
            "range": "stddev: 0.0023913112068861347",
            "extra": "mean: 30.36001110345116 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 530.5352614268343,
            "unit": "iter/sec",
            "range": "stddev: 0.00024257588497411377",
            "extra": "mean: 1.8848888522707727 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.459440158334054,
            "unit": "iter/sec",
            "range": "stddev: 0.0024504748091681463",
            "extra": "mean: 18.70577015094508 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 395.3114047403912,
            "unit": "iter/sec",
            "range": "stddev: 0.00014203452349834775",
            "extra": "mean: 2.5296512774700233 msec\nrounds: 364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.46165557269869,
            "unit": "iter/sec",
            "range": "stddev: 0.0011139277465988257",
            "extra": "mean: 12.275714174598033 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 70.08642164127222,
            "unit": "iter/sec",
            "range": "stddev: 0.01751732496404901",
            "extra": "mean: 14.26809896385299 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5019601.002264147,
            "unit": "iter/sec",
            "range": "stddev: 5.794549120764143e-7",
            "extra": "mean: 199.21902150176493 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.27247581465133,
            "unit": "iter/sec",
            "range": "stddev: 0.001185285458179224",
            "extra": "mean: 11.727113472975791 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.94915200302472,
            "unit": "iter/sec",
            "range": "stddev: 0.0009710080904519299",
            "extra": "mean: 11.911972618424658 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1735.453128540991,
            "unit": "iter/sec",
            "range": "stddev: 0.0002194630653306583",
            "extra": "mean: 576.2183855928785 usec\nrounds: 1652"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.700835960228,
            "unit": "iter/sec",
            "range": "stddev: 0.00010621165655980876",
            "extra": "mean: 1.0196789513500064 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.027833933071633,
            "unit": "iter/sec",
            "range": "stddev: 0.0024729255844053266",
            "extra": "mean: 142.29135314285 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1718.0879453603543,
            "unit": "iter/sec",
            "range": "stddev: 0.00013286854354139276",
            "extra": "mean: 582.04238188183 usec\nrounds: 1126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1768.4955666211665,
            "unit": "iter/sec",
            "range": "stddev: 0.00010826371364466238",
            "extra": "mean: 565.4523646392676 usec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.37802896493,
            "unit": "iter/sec",
            "range": "stddev: 0.00041153138504931483",
            "extra": "mean: 10.709157294116482 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.050521132872607,
            "unit": "iter/sec",
            "range": "stddev: 0.0014456006818396971",
            "extra": "mean: 35.649961555548174 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4539349.463575414,
            "unit": "iter/sec",
            "range": "stddev: 1.5803440156775178e-7",
            "extra": "mean: 220.295883369075 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 80.74173037738876,
            "unit": "iter/sec",
            "range": "stddev: 0.001305737082842753",
            "extra": "mean: 12.385169296297917 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3688762.6363970456,
            "unit": "iter/sec",
            "range": "stddev: 2.3715700929551438e-7",
            "extra": "mean: 271.09361554828996 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 217.11313611845662,
            "unit": "iter/sec",
            "range": "stddev: 0.00044857752500911184",
            "extra": "mean: 4.605893581005625 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.89254511209172,
            "unit": "iter/sec",
            "range": "stddev: 0.0009790813170097185",
            "extra": "mean: 12.362078589742891 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7984.329955136458,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358133422145411",
            "extra": "mean: 125.24532498267843 usec\nrounds: 5748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.85452871128756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009396865845517216",
            "extra": "mean: 12.069346305554044 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 609.7993945093368,
            "unit": "iter/sec",
            "range": "stddev: 0.0002040814935979738",
            "extra": "mean: 1.6398835567959698 msec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 57.47766755930901,
            "unit": "iter/sec",
            "range": "stddev: 0.02173233333305866",
            "extra": "mean: 17.398061585713062 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 79.07871501704108,
            "unit": "iter/sec",
            "range": "stddev: 0.0010405989723053274",
            "extra": "mean: 12.6456278378386 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.38666211151006,
            "unit": "iter/sec",
            "range": "stddev: 0.0010958388364687363",
            "extra": "mean: 11.99232556716007 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6070182356010125,
            "unit": "iter/sec",
            "range": "stddev: 0.014082784504575606",
            "extra": "mean: 1.647396966600013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 146.8147857360361,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386458117566305",
            "extra": "mean: 6.811303064515164 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 80.10636073983709,
            "unit": "iter/sec",
            "range": "stddev: 0.001252370414363892",
            "extra": "mean: 12.483403199999543 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.5160316912415,
            "unit": "iter/sec",
            "range": "stddev: 0.00046996505492833904",
            "extra": "mean: 7.066337206103912 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 86.45242785362535,
            "unit": "iter/sec",
            "range": "stddev: 0.00040145140559034217",
            "extra": "mean: 11.567055140349831 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.49292065455411,
            "unit": "iter/sec",
            "range": "stddev: 0.02031945226024948",
            "extra": "mean: 14.81636874359392 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 200.72875394824138,
            "unit": "iter/sec",
            "range": "stddev: 0.000550175821979887",
            "extra": "mean: 4.981847295569092 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 177.91429375167343,
            "unit": "iter/sec",
            "range": "stddev: 0.0004608403304472045",
            "extra": "mean: 5.62068386363473 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.744353219823182,
            "unit": "iter/sec",
            "range": "stddev: 0.0015720217327405877",
            "extra": "mean: 40.413260799998625 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5306.8806190084115,
            "unit": "iter/sec",
            "range": "stddev: 0.00003987325809129993",
            "extra": "mean: 188.43461381402804 usec\nrounds: 2693"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5842187.21516998,
            "unit": "iter/sec",
            "range": "stddev: 1.8403039596207245e-7",
            "extra": "mean: 171.16877004618163 nsec\nrounds: 56498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 179.0888296957479,
            "unit": "iter/sec",
            "range": "stddev: 0.01201099968492898",
            "extra": "mean: 5.583821178009201 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.06111586717493,
            "unit": "iter/sec",
            "range": "stddev: 0.001107041171464422",
            "extra": "mean: 12.336371012195038 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 130.65613682730051,
            "unit": "iter/sec",
            "range": "stddev: 0.0003697166023928905",
            "extra": "mean: 7.653677999999236 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1662.629431166729,
            "unit": "iter/sec",
            "range": "stddev: 0.00015457068581421497",
            "extra": "mean: 601.4569339713076 usec\nrounds: 1045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1732.5639448916436,
            "unit": "iter/sec",
            "range": "stddev: 0.00012280740738067542",
            "extra": "mean: 577.1792740743783 usec\nrounds: 1755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6081127081191615,
            "unit": "iter/sec",
            "range": "stddev: 0.009993853337658577",
            "extra": "mean: 1.644432005200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 262.3066528631054,
            "unit": "iter/sec",
            "range": "stddev: 0.00020374132636256215",
            "extra": "mean: 3.812331822639236 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2272752.670337219,
            "unit": "iter/sec",
            "range": "stddev: 3.072364015671047e-7",
            "extra": "mean: 439.99508307767815 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1762.1472829167903,
            "unit": "iter/sec",
            "range": "stddev: 0.00012974948727543866",
            "extra": "mean: 567.4894543121005 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.87135657158642,
            "unit": "iter/sec",
            "range": "stddev: 0.0007184765180111597",
            "extra": "mean: 20.461883404754825 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1690.1304819428992,
            "unit": "iter/sec",
            "range": "stddev: 0.00012868126441743606",
            "extra": "mean: 591.6702945032057 usec\nrounds: 1219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.4649150024182,
            "unit": "iter/sec",
            "range": "stddev: 0.004432372771342247",
            "extra": "mean: 5.450633435754293 msec\nrounds: 179"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "5b009d2e2775f263628af12723cce6714cad6d22",
          "message": "fix(bigquery): fix table naming from `count` rename removal refactor",
          "timestamp": "2023-05-24T10:06:14+02:00",
          "tree_id": "fba15925ed49cae63452764abcd1310dba5062ef",
          "url": "https://github.com/ibis-project/ibis/commit/5b009d2e2775f263628af12723cce6714cad6d22"
        },
        "date": 1684916081499,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1637.3691603267273,
            "unit": "iter/sec",
            "range": "stddev: 0.00285646354076118",
            "extra": "mean: 610.7358219697114 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2254.327532609227,
            "unit": "iter/sec",
            "range": "stddev: 0.00008935817800684735",
            "extra": "mean: 443.5912641507642 usec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.04827950555882,
            "unit": "iter/sec",
            "range": "stddev: 0.000088427040869779",
            "extra": "mean: 10.096086524591046 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.22816667887615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000631729092027932",
            "extra": "mean: 9.325907837208215 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.7706591187849,
            "unit": "iter/sec",
            "range": "stddev: 0.0004594025402532453",
            "extra": "mean: 9.92352346153889 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.14588925332237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009167058961193063",
            "extra": "mean: 6.660188999998695 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.6151287762723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790475482046106",
            "extra": "mean: 3.615131263513808 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 91.38005380156385,
            "unit": "iter/sec",
            "range": "stddev: 0.009341615231641362",
            "extra": "mean: 10.943307192306406 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.3954467489835,
            "unit": "iter/sec",
            "range": "stddev: 0.000014462502677776975",
            "extra": "mean: 1.3220597827472893 msec\nrounds: 626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.1177577652541,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414049430906297",
            "extra": "mean: 6.206640496182819 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6854235.519766494,
            "unit": "iter/sec",
            "range": "stddev: 6.7400795668777105e-9",
            "extra": "mean: 145.89519095380268 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9221407334017652,
            "unit": "iter/sec",
            "range": "stddev: 0.003730826911700918",
            "extra": "mean: 1.084433171400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.7691350315084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002320890429530852",
            "extra": "mean: 3.748559592105319 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1608472.8946771913,
            "unit": "iter/sec",
            "range": "stddev: 8.39087383785287e-8",
            "extra": "mean: 621.7077100330577 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.882198789098,
            "unit": "iter/sec",
            "range": "stddev: 0.00012701580459614602",
            "extra": "mean: 5.8519846250000285 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 396.451903111288,
            "unit": "iter/sec",
            "range": "stddev: 0.00003707963405239548",
            "extra": "mean: 2.522374068965662 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.81943109433,
            "unit": "iter/sec",
            "range": "stddev: 0.00002830802363663895",
            "extra": "mean: 5.159441415929602 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.78210192844096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005731535422082317",
            "extra": "mean: 17.306397078431466 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.7334204434653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476094078964014",
            "extra": "mean: 9.548050620000481 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.3156682256833,
            "unit": "iter/sec",
            "range": "stddev: 0.0006385543845145398",
            "extra": "mean: 10.068904714285528 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.3694949932381,
            "unit": "iter/sec",
            "range": "stddev: 0.00039281197213493485",
            "extra": "mean: 4.010113586776587 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.6316091602785,
            "unit": "iter/sec",
            "range": "stddev: 0.012074794481182264",
            "extra": "mean: 11.282656486487037 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.4625852540172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163946615640495",
            "extra": "mean: 3.7670091965808092 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2335.039995605361,
            "unit": "iter/sec",
            "range": "stddev: 0.00008342575653161293",
            "extra": "mean: 428.25818910255936 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.91655637676435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007449274370633424",
            "extra": "mean: 9.909176808080682 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.13474765174132,
            "unit": "iter/sec",
            "range": "stddev: 0.00006888773808477404",
            "extra": "mean: 9.696053200001368 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2536651.2348759985,
            "unit": "iter/sec",
            "range": "stddev: 1.576536626627743e-8",
            "extra": "mean: 394.220532271568 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2289.9417053515017,
            "unit": "iter/sec",
            "range": "stddev: 0.00009525756002963444",
            "extra": "mean: 436.69233922550967 usec\nrounds: 1188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3020606045769865,
            "unit": "iter/sec",
            "range": "stddev: 0.05606401646442584",
            "extra": "mean: 768.0134061999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.041997822708,
            "unit": "iter/sec",
            "range": "stddev: 0.000012528795612398028",
            "extra": "mean: 854.6701758234889 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140668.50043187174,
            "unit": "iter/sec",
            "range": "stddev: 3.329833376302255e-7",
            "extra": "mean: 7.108912065813326 usec\nrounds: 43669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13756.948068368401,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014544047128297744",
            "extra": "mean: 72.69054117455876 usec\nrounds: 6436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2393.994947360794,
            "unit": "iter/sec",
            "range": "stddev: 0.00007906727922294874",
            "extra": "mean: 417.7118256253746 usec\nrounds: 1319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.618360244146558,
            "unit": "iter/sec",
            "range": "stddev: 0.0016282870601245748",
            "extra": "mean: 617.9093954000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1064814.854256064,
            "unit": "iter/sec",
            "range": "stddev: 1.544826291648169e-7",
            "extra": "mean: 939.1303999967704 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2403.183548905101,
            "unit": "iter/sec",
            "range": "stddev: 0.00009267208152248307",
            "extra": "mean: 416.1146993768344 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9017.348263024627,
            "unit": "iter/sec",
            "range": "stddev: 0.000015446150102680537",
            "extra": "mean: 110.89734707269439 usec\nrounds: 4270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.4668025067667,
            "unit": "iter/sec",
            "range": "stddev: 0.000007104031994016408",
            "extra": "mean: 564.1854609551607 usec\nrounds: 1319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4550.92655301164,
            "unit": "iter/sec",
            "range": "stddev: 0.000027918174533320118",
            "extra": "mean: 219.73547328252002 usec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.75452608501942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438988840481213",
            "extra": "mean: 9.827572673911975 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.82863006838286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007690798769945608",
            "extra": "mean: 10.435294747367301 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6418178.140910389,
            "unit": "iter/sec",
            "range": "stddev: 9.010094737203437e-9",
            "extra": "mean: 155.80745470780423 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4637305.166945446,
            "unit": "iter/sec",
            "range": "stddev: 1.1746338438360342e-8",
            "extra": "mean: 215.64248286442847 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.49790042222783,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454980916413654",
            "extra": "mean: 8.097303651164053 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.14835881160931,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504392012223522",
            "extra": "mean: 9.886467875000507 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.40325008659335,
            "unit": "iter/sec",
            "range": "stddev: 0.00003545870359352014",
            "extra": "mean: 2.373023937984607 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2486008.5695418604,
            "unit": "iter/sec",
            "range": "stddev: 1.613486996170847e-8",
            "extra": "mean: 402.2512280337176 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6549.973596866112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000330954063818441",
            "extra": "mean: 152.6723711494743 usec\nrounds: 2662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6362958.330153696,
            "unit": "iter/sec",
            "range": "stddev: 3.952401133873347e-9",
            "extra": "mean: 157.1596022028532 nsec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.466028954005075,
            "unit": "iter/sec",
            "range": "stddev: 0.00035340269767475255",
            "extra": "mean: 118.1191330000028 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.15860254573097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497537434084081",
            "extra": "mean: 9.788700854167942 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 528.3869155463191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011022803900092536",
            "extra": "mean: 1.8925525416655375 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.74633150658826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490657929884878",
            "extra": "mean: 3.639721027452629 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.578803779519355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002006225299417537",
            "extra": "mean: 33.80799329999983 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.00510355566438,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221710640295376",
            "extra": "mean: 9.900489824743316 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7675425270875738,
            "unit": "iter/sec",
            "range": "stddev: 0.019189018639886795",
            "extra": "mean: 1.3028594047999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 75.72387736561375,
            "unit": "iter/sec",
            "range": "stddev: 0.014484612643950633",
            "extra": "mean: 13.205874220779144 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.53138546357535,
            "unit": "iter/sec",
            "range": "stddev: 0.00022591825714447452",
            "extra": "mean: 21.490870947369437 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2536336.249765038,
            "unit": "iter/sec",
            "range": "stddev: 1.4545021395068396e-8",
            "extra": "mean: 394.26949013265454 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.795527306585,
            "unit": "iter/sec",
            "range": "stddev: 0.0041742866780005395",
            "extra": "mean: 4.2590249118938575 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.54805736120042,
            "unit": "iter/sec",
            "range": "stddev: 0.0007224997173222899",
            "extra": "mean: 9.847554212121057 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.3066267704223,
            "unit": "iter/sec",
            "range": "stddev: 0.000243040673146452",
            "extra": "mean: 3.6323135833337497 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 267.8225337629642,
            "unit": "iter/sec",
            "range": "stddev: 0.00025437609586299284",
            "extra": "mean: 3.7338157695313567 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.918149926656453,
            "unit": "iter/sec",
            "range": "stddev: 0.004940519297529171",
            "extra": "mean: 1.0891467405999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.73137298466196,
            "unit": "iter/sec",
            "range": "stddev: 0.00010221340346890544",
            "extra": "mean: 5.326760168539875 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.0805355036294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008100706467647502",
            "extra": "mean: 9.167538419049357 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.8096521423985,
            "unit": "iter/sec",
            "range": "stddev: 0.016003877538210344",
            "extra": "mean: 12.075886978493905 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 666.7760944221221,
            "unit": "iter/sec",
            "range": "stddev: 0.000024726270962715847",
            "extra": "mean: 1.4997538279573064 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9333.885592259961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018378076075506576",
            "extra": "mean: 107.13651781089334 usec\nrounds: 1937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.619005536516525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001731917339770862",
            "extra": "mean: 18.308645318183828 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.493232343946675,
            "unit": "iter/sec",
            "range": "stddev: 0.0017311157450237203",
            "extra": "mean: 401.0857641999962 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.4337053728214,
            "unit": "iter/sec",
            "range": "stddev: 0.00041445473051070425",
            "extra": "mean: 36.45151052000074 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.11477076343843,
            "unit": "iter/sec",
            "range": "stddev: 0.022132134415278722",
            "extra": "mean: 31.138319727272222 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.075470045041364,
            "unit": "iter/sec",
            "range": "stddev: 0.02202241170047523",
            "extra": "mean: 24.95292004999783 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.4811325072039,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170609720839687",
            "extra": "mean: 3.710834931915939 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.062420928105865,
            "unit": "iter/sec",
            "range": "stddev: 0.00017375002754821452",
            "extra": "mean: 19.97506276086987 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.064273042299558,
            "unit": "iter/sec",
            "range": "stddev: 0.00010472557455842721",
            "extra": "mean: 52.454137526314966 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.41849586765647,
            "unit": "iter/sec",
            "range": "stddev: 0.004052350694701957",
            "extra": "mean: 5.867907675799343 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.16505282024922,
            "unit": "iter/sec",
            "range": "stddev: 0.016621123489212578",
            "extra": "mean: 11.605633226803931 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.176411935342946,
            "unit": "iter/sec",
            "range": "stddev: 0.05556586733870236",
            "extra": "mean: 5.6685507024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.57169820106145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943546454326329",
            "extra": "mean: 9.655147278349363 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2335.0070234240757,
            "unit": "iter/sec",
            "range": "stddev: 0.00008562362216708165",
            "extra": "mean: 428.26423645338366 usec\nrounds: 1827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2264.9257450251266,
            "unit": "iter/sec",
            "range": "stddev: 0.00008662785146930391",
            "extra": "mean: 441.5155782464322 usec\nrounds: 1802"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12604809.86642464,
            "unit": "iter/sec",
            "range": "stddev: 2.8772072848108714e-9",
            "extra": "mean: 79.3347944630964 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2300.916786577442,
            "unit": "iter/sec",
            "range": "stddev: 0.00009535407128011947",
            "extra": "mean: 434.609372157033 usec\nrounds: 1451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.72460898193694,
            "unit": "iter/sec",
            "range": "stddev: 0.000741740906245125",
            "extra": "mean: 10.33863057732027 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.5924041906046,
            "unit": "iter/sec",
            "range": "stddev: 0.000234727773820473",
            "extra": "mean: 8.961183400009531 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 226.24183578050537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894524453597171",
            "extra": "mean: 4.420049000000942 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.18575459510062,
            "unit": "iter/sec",
            "range": "stddev: 0.01353924895529364",
            "extra": "mean: 11.469763663159197 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.17824849443447,
            "unit": "iter/sec",
            "range": "stddev: 0.0006836672030712676",
            "extra": "mean: 10.39736131249954 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.7176463350667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001550139794328832",
            "extra": "mean: 14.98853833928493 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5762958.650736926,
            "unit": "iter/sec",
            "range": "stddev: 8.632819145353463e-9",
            "extra": "mean: 173.52198073983902 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "463cdc3328a61414a07328399d0cb51c2690904a",
          "message": "refactor(datatypes): remove `value_type` parametrization of the Interval datatype\n\nnone of the backends support the definition of the underlying phyisical type\n\nBREAKING CHANGE: `dt.Interval.value_type` attribute is removed",
          "timestamp": "2023-05-24T05:18:51-05:00",
          "tree_id": "3baaf5ef2245feba6a4c8607439a5daf493f2a89",
          "url": "https://github.com/ibis-project/ibis/commit/463cdc3328a61414a07328399d0cb51c2690904a"
        },
        "date": 1684923756252,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.718528266959595,
            "unit": "iter/sec",
            "range": "stddev: 0.001338575947240967",
            "extra": "mean: 29.657284923075622 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.50106128989313,
            "unit": "iter/sec",
            "range": "stddev: 0.00032879674311051124",
            "extra": "mean: 3.5650488999986942 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.96015145535127,
            "unit": "iter/sec",
            "range": "stddev: 0.00070830374530752",
            "extra": "mean: 11.770223838707793 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2112.6557232901923,
            "unit": "iter/sec",
            "range": "stddev: 0.00007080919880038163",
            "extra": "mean: 473.3378888835836 usec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5596229246004085,
            "unit": "iter/sec",
            "range": "stddev: 0.0015629962996634142",
            "extra": "mean: 641.1806240000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.84610798355035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007734711783580587",
            "extra": "mean: 9.537788471431798 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2061.9349302629057,
            "unit": "iter/sec",
            "range": "stddev: 0.00009096096718970759",
            "extra": "mean: 484.98135674557665 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.589277787014439,
            "unit": "iter/sec",
            "range": "stddev: 0.00022528556876141512",
            "extra": "mean: 116.42422387500773 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.69542422621225,
            "unit": "iter/sec",
            "range": "stddev: 0.000859718761840316",
            "extra": "mean: 10.449820439022481 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8743686173503123,
            "unit": "iter/sec",
            "range": "stddev: 0.02538313772033845",
            "extra": "mean: 1.1436824013999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.33201176677588,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758118638390165",
            "extra": "mean: 6.160214421766119 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 525.2365485571858,
            "unit": "iter/sec",
            "range": "stddev: 0.000030057692937234716",
            "extra": "mean: 1.9039040652197181 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.909495411972,
            "unit": "iter/sec",
            "range": "stddev: 0.0002072496351498176",
            "extra": "mean: 3.8773291320765413 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1722719.291433833,
            "unit": "iter/sec",
            "range": "stddev: 9.861181981692631e-8",
            "extra": "mean: 580.4776233553941 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.9283538831286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002518886908559181",
            "extra": "mean: 10.646412490569794 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 77.19773806254287,
            "unit": "iter/sec",
            "range": "stddev: 0.020509981860355398",
            "extra": "mean: 12.953747416664404 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.75472611952114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003226366990097489",
            "extra": "mean: 3.6264111011702744 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9444.465182765067,
            "unit": "iter/sec",
            "range": "stddev: 0.000020132787794553262",
            "extra": "mean: 105.88212044286756 usec\nrounds: 3346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 412.4209052615833,
            "unit": "iter/sec",
            "range": "stddev: 0.000040243425652081453",
            "extra": "mean: 2.4247073493176514 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.515388133414206,
            "unit": "iter/sec",
            "range": "stddev: 0.001766215130321116",
            "extra": "mean: 397.5529607999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1794.0679897333505,
            "unit": "iter/sec",
            "range": "stddev: 0.000008332665428646801",
            "extra": "mean: 557.392476607661 usec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 136.25448241798065,
            "unit": "iter/sec",
            "range": "stddev: 0.012274872381965757",
            "extra": "mean: 7.339208092489414 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1851968.3923011892,
            "unit": "iter/sec",
            "range": "stddev: 1.1344995991096395e-7",
            "extra": "mean: 539.9660189434637 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.7657529946838,
            "unit": "iter/sec",
            "range": "stddev: 0.0011528470739607807",
            "extra": "mean: 10.552335294123589 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 224.3744313369028,
            "unit": "iter/sec",
            "range": "stddev: 0.003696979385659907",
            "extra": "mean: 4.4568358080804655 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1951389.814728832,
            "unit": "iter/sec",
            "range": "stddev: 8.998063739521534e-8",
            "extra": "mean: 512.4552728789155 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.02192715706875,
            "unit": "iter/sec",
            "range": "stddev: 0.00026960157781791695",
            "extra": "mean: 7.245225600001959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.26851808562527,
            "unit": "iter/sec",
            "range": "stddev: 0.01982829328769498",
            "extra": "mean: 12.458184402174519 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1933232.1727858607,
            "unit": "iter/sec",
            "range": "stddev: 1.3048614692505394e-7",
            "extra": "mean: 517.2684450822904 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1687208104317264,
            "unit": "iter/sec",
            "range": "stddev: 0.17404024034382226",
            "extra": "mean: 5.926951141600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2117.640732336537,
            "unit": "iter/sec",
            "range": "stddev: 0.00008079061412361888",
            "extra": "mean: 472.22363299398387 usec\nrounds: 1079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148979.23655029168,
            "unit": "iter/sec",
            "range": "stddev: 3.541051360697247e-7",
            "extra": "mean: 6.71234477471916 usec\nrounds: 37175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7554718230341605,
            "unit": "iter/sec",
            "range": "stddev: 0.0051126522429738",
            "extra": "mean: 1.3236761047999834 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.38289249707952,
            "unit": "iter/sec",
            "range": "stddev: 0.0010045082644159482",
            "extra": "mean: 9.961856797751603 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2144.2423866105764,
            "unit": "iter/sec",
            "range": "stddev: 0.00009152203614243161",
            "extra": "mean: 466.3651862514989 usec\nrounds: 1702"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.7856388493626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004089385007520281",
            "extra": "mean: 3.1767650000022383 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.36550440899684,
            "unit": "iter/sec",
            "range": "stddev: 0.022706910493073888",
            "extra": "mean: 12.443149674153615 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2133.8291366248445,
            "unit": "iter/sec",
            "range": "stddev: 0.00011465368300234466",
            "extra": "mean: 468.6410841599701 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4557.593769921925,
            "unit": "iter/sec",
            "range": "stddev: 0.000022650810924028094",
            "extra": "mean: 219.41402645394845 usec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.25750380646097,
            "unit": "iter/sec",
            "range": "stddev: 0.0011033968928603694",
            "extra": "mean: 10.074805043957864 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3492422508721644,
            "unit": "iter/sec",
            "range": "stddev: 0.003979461514046712",
            "extra": "mean: 741.1567487999946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.02443050304786,
            "unit": "iter/sec",
            "range": "stddev: 0.038130649854730775",
            "extra": "mean: 27.758939864861837 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2062.8794934628604,
            "unit": "iter/sec",
            "range": "stddev: 0.00009240567442425861",
            "extra": "mean: 484.75929067545593 usec\nrounds: 1094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1026344.3753610837,
            "unit": "iter/sec",
            "range": "stddev: 1.4037839608520984e-7",
            "extra": "mean: 974.3318363762502 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 765.148788984115,
            "unit": "iter/sec",
            "range": "stddev: 0.00010152247278715514",
            "extra": "mean: 1.3069353495647509 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5496902.834732211,
            "unit": "iter/sec",
            "range": "stddev: 1.3692666516165682e-8",
            "extra": "mean: 181.9206251346807 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.1353303759373,
            "unit": "iter/sec",
            "range": "stddev: 0.00046726601653749764",
            "extra": "mean: 3.595372075343199 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.30820101396804,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173069711187355",
            "extra": "mean: 21.59444716279019 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.5625168926488,
            "unit": "iter/sec",
            "range": "stddev: 0.00033533030197675795",
            "extra": "mean: 3.7374442863430652 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.53951486048061,
            "unit": "iter/sec",
            "range": "stddev: 0.0007982325380775124",
            "extra": "mean: 9.658148402061753 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.78837352702389,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698996148704788",
            "extra": "mean: 27.942035399985343 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.41603029279406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003392606461787301",
            "extra": "mean: 3.670855929165384 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14143.49171951288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014391610093434291",
            "extra": "mean: 70.70389828986596 usec\nrounds: 6902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10072.37464871599,
            "unit": "iter/sec",
            "range": "stddev: 0.000002131866809042271",
            "extra": "mean: 99.28145396453044 usec\nrounds: 4225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2102.714515638779,
            "unit": "iter/sec",
            "range": "stddev: 0.00009009699201620621",
            "extra": "mean: 475.57573439598013 usec\nrounds: 753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 664.0046908787208,
            "unit": "iter/sec",
            "range": "stddev: 0.000038871879920413335",
            "extra": "mean: 1.5060134570384354 msec\nrounds: 547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.9909232425825,
            "unit": "iter/sec",
            "range": "stddev: 0.00027491587852632523",
            "extra": "mean: 3.649755941420852 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.52070861103326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513580628882362",
            "extra": "mean: 19.040108681814807 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.11384604719058,
            "unit": "iter/sec",
            "range": "stddev: 0.000877864828354001",
            "extra": "mean: 9.988628341464686 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2096.1972805706932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009922729041332131",
            "extra": "mean: 477.05433513764905 usec\nrounds: 1662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4483728.732468515,
            "unit": "iter/sec",
            "range": "stddev: 1.544706683675559e-8",
            "extra": "mean: 223.02865754530418 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 228.95190107948667,
            "unit": "iter/sec",
            "range": "stddev: 0.0004214285340830389",
            "extra": "mean: 4.36772962043597 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.21612075109108,
            "unit": "iter/sec",
            "range": "stddev: 0.00007058055583956707",
            "extra": "mean: 9.504246999998145 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6104584.9490140285,
            "unit": "iter/sec",
            "range": "stddev: 1.8808546134046323e-8",
            "extra": "mean: 163.81130057976196 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.1121084725116,
            "unit": "iter/sec",
            "range": "stddev: 0.00030965247653375305",
            "extra": "mean: 5.3443895649698625 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.71034822956616,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847802050946909",
            "extra": "mean: 33.658306266664795 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.963258391987985,
            "unit": "iter/sec",
            "range": "stddev: 0.00018402810480772961",
            "extra": "mean: 52.73355344999686 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.75900718347907,
            "unit": "iter/sec",
            "range": "stddev: 0.02312433686798694",
            "extra": "mean: 11.93901448484747 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.781595383387835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870293813494143",
            "extra": "mean: 42.049323599985655 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.38038899660256,
            "unit": "iter/sec",
            "range": "stddev: 0.0008287720695782954",
            "extra": "mean: 10.269008065216171 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.35970475866924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000950030801803778",
            "extra": "mean: 5.670229496972683 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2093.536771429517,
            "unit": "iter/sec",
            "range": "stddev: 0.00009118319779620384",
            "extra": "mean: 477.6605854967506 usec\nrounds: 1310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.01611518132032,
            "unit": "iter/sec",
            "range": "stddev: 0.00013104642636438223",
            "extra": "mean: 9.089577452829296 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6955957.32341171,
            "unit": "iter/sec",
            "range": "stddev: 4.865326234232408e-9",
            "extra": "mean: 143.76166406804637 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.42665383853523,
            "unit": "iter/sec",
            "range": "stddev: 0.0009338823295317917",
            "extra": "mean: 9.95751587629105 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.22144777009797,
            "unit": "iter/sec",
            "range": "stddev: 0.0007457048750078076",
            "extra": "mean: 19.91181147500498 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.41528647561469,
            "unit": "iter/sec",
            "range": "stddev: 0.000902568451477269",
            "extra": "mean: 9.958643102042483 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.36630770568767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313878132314303",
            "extra": "mean: 9.768839205132705 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 82.90933440916403,
            "unit": "iter/sec",
            "range": "stddev: 0.029525249755555327",
            "extra": "mean: 12.061368085105133 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.17322420787428,
            "unit": "iter/sec",
            "range": "stddev: 0.00013645119581342816",
            "extra": "mean: 7.925611842592443 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8867444435089296,
            "unit": "iter/sec",
            "range": "stddev: 0.01549535096274716",
            "extra": "mean: 1.1277206271999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.64887402131377,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510112409380057",
            "extra": "mean: 9.837787281247401 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11167962.532085225,
            "unit": "iter/sec",
            "range": "stddev: 4.483944085802775e-9",
            "extra": "mean: 89.54184768507243 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.12304373292196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008128830486656962",
            "extra": "mean: 16.632557800004122 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.5311135110108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003608427484066993",
            "extra": "mean: 3.7378829956495614 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.24368475881315,
            "unit": "iter/sec",
            "range": "stddev: 0.00036070447932599545",
            "extra": "mean: 10.390292126761375 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.3105695740849,
            "unit": "iter/sec",
            "range": "stddev: 0.000009912006932801246",
            "extra": "mean: 846.51744067654 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 204.62630064912025,
            "unit": "iter/sec",
            "range": "stddev: 0.00005139085170039056",
            "extra": "mean: 4.886957330645068 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6256159.361117119,
            "unit": "iter/sec",
            "range": "stddev: 5.798006150504791e-9",
            "extra": "mean: 159.84247559537948 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.81768593753516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009475910556449188",
            "extra": "mean: 9.918894593747988 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.33133189093368,
            "unit": "iter/sec",
            "range": "stddev: 0.0008151124755705567",
            "extra": "mean: 9.868615968418668 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6983.800585833887,
            "unit": "iter/sec",
            "range": "stddev: 0.00003287689636522123",
            "extra": "mean: 143.1885099967523 usec\nrounds: 3351"
          }
        ]
      }
    ]
  }
}