import { AbstractSyntaxGraph, DataNode, PropertyNode } from '../../abstract-syntax-graph/abstract-syntax-graph';
import { AngularBackend } from './angluar-backend';
import { readFileSync } from 'fs';
import { VirtualFileSystem, Directory, VirtualFileSystemNode } from '../../virtual-file-system/virtual-file-system';
import { File } from '../../virtual-file-system/virtual-file-system';
import { Backend } from '../backend';

describe("The AngularBackend", function () {

    let backend: Backend;
    let abstractSyntaxTree: AbstractSyntaxGraph;
    let data: DataNode;
    let root: VirtualFileSystem;
    let src: Directory;
    let app: Directory;
    let dir: Directory;

    const NAME = "Shipping Information";
    const KEBAB = "shipping-information";
    const PASCAL = "ShippingInformation";

    beforeAll(() => {
        backend = new AngularBackend();
        abstractSyntaxTree = new AbstractSyntaxGraph();
        data = new DataNode(NAME);
        data.appendChildNode(new PropertyNode("Company", PropertyNode.TYPE_STRING));
        data.appendChildNode(new PropertyNode("First Name", PropertyNode.TYPE_STRING));
        data.appendChildNode(new PropertyNode("Last Name", PropertyNode.TYPE_STRING));
        data.appendChildNode(new PropertyNode("Address", PropertyNode.TYPE_STRING));
        data.appendChildNode(new PropertyNode("City", PropertyNode.TYPE_STRING));
        data.appendChildNode(new PropertyNode("Postal Code", PropertyNode.TYPE_NUMBER));
        abstractSyntaxTree.appendChildNode(data);
        root = backend.generate(abstractSyntaxTree);
        src = root.getChildNode("src");
        app = src.getChildNode("app")
        dir = app.getChildNode(KEBAB);
    });

    it("generates a src and app directory", function () {
        expect(dir.getType()).toBe(VirtualFileSystemNode.DIRECTORY);
    });

    it("generates a class file", function () {
        const file = dir.getChildNode(`${KEBAB}.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a service file", function () {
        const file = dir.getChildNode(`${KEBAB}.service.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information.service.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a form component HTML file", function () {
        const file = dir.getChildNode(`${KEBAB}-form`).getChildNode(`${KEBAB}-form.component.html`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-form/shipping-information-form.component.html');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a form component SCSS file", function () {
        const file = dir.getChildNode(`${KEBAB}-form`).getChildNode(`${KEBAB}-form.component.scss`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-form/shipping-information-form.component.scss');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a form component TS file", function () {
        const file = dir.getChildNode(`${KEBAB}-form`).getChildNode(`${KEBAB}-form.component.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-form/shipping-information-form.component.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a table component HTML file", function () {
        const file = dir.getChildNode(`${KEBAB}-table`).getChildNode(`${KEBAB}-table.component.html`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-table/shipping-information-table.component.html');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a table component SCSS file", function () {
        const file = dir.getChildNode(`${KEBAB}-table`).getChildNode(`${KEBAB}-table.component.scss`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-table/shipping-information-table.component.scss');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a table component TS file", function () {
        const file = dir.getChildNode(`${KEBAB}-table`).getChildNode(`${KEBAB}-table.component.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information-table/shipping-information-table.component.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a component HTML file", function () {
        const file = dir.getChildNode(`${KEBAB}.component.html`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information.component.html');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a component SCSS file", function () {
        const file = dir.getChildNode(`${KEBAB}.component.scss`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information.component.scss');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a component TS file", function () {
        const file = dir.getChildNode(`${KEBAB}.component.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information/shipping-information.component.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates app-routing.module.ts", function () {
        const fileName = 'app-routing.module.ts';
        expectFile(app, fileName).toBe(`angular/src/app/${fileName}`);
    });

    it("generates app.component.html", function () {
        const fileName = 'app.component.html';
        expectFile(app, fileName).toBe(`angular/src/app/${fileName}`);
    });

    it("generates app.component.scss", function () {
        const fileName = 'app.component.scss';
        expectFile(app, fileName).toBe(`angular/src/app/${fileName}`);
    });

    it("generates app.component.ts", function () {
        const fileName = 'app.component.ts';
        expectFile(app, fileName).toBe(`angular/src/app/${fileName}`);
    });

    it("generates app.module.ts", function () {
        const fileName = 'app.module.ts';
        expectFile(app, fileName).toBe(`angular/src/app/${fileName}`);
    });

});

function expectFile(dir: Directory, fileName: string) {
    const file = dir.getChildNode(fileName) as File;
    expect(file).toBeDefined();
    return {
        toBe: function (path: string) {
            const expected = readFileSync(path);
            expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
        }
    }
}