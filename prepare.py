from glob import glob

import os
import shutil
from rdata.parser import parse_file
from rdata.conversion import SimpleConverter

PATH = './countrycode-r/data/codelist_panel.rda'
SUBMODULE_PATH = './countrycode-r'
DATA_DIR = './data'

def main():
    rdata_paths = glob(SUBMODULE_PATH + '/**/*.rda')
    converter = SimpleConverter()
    shutil.rmtree(DATA_DIR, ignore_errors=True)

    for rdata_path in rdata_paths:
        print(f'Start parsing {rdata_path}')
        parsed = parse_file(rdata_path)
        result = converter.convert(parsed)

        for k, v in result.items():
            print(f'{rdata_path} > {k}')
            output = f'{DATA_DIR}/{k}.json'
            os.makedirs(os.path.dirname(output), exist_ok=True)
            v.to_json(output, orient='records')
            print(f'[saved] {output}')


if __name__ == '__main__':
    main()
